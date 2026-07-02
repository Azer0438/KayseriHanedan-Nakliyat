const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = process.cwd();
const assetsDir = path.join(root, "assets", "images");
const importsDir = path.join(root, "G\u00f6rseller");

const coreConversions = [
  { src: "hero-slide-1.png", webp: "hero-slide-1.webp", fallback: "hero-slide-1-fallback.jpg" },
  { src: "hero-slide-4.jpeg", webp: "hero-slide-4.webp", fallback: "hero-slide-4-fallback.jpg" },
  { src: "hanedan-arac.jpeg", webp: "hanedan-arac.webp", fallback: "hanedan-arac-fallback.jpg" },
  { src: "hanedan-arac-bina.jpeg", webp: "hanedan-arac-bina.webp", fallback: "hanedan-arac-bina-fallback.jpg" },
  { src: "logo.png", webp: "logo.webp", fallback: "logo-fallback.png" },
  { src: "logo-navbar.png", webp: "logo-navbar.webp", fallback: "logo-navbar-fallback.png" }
];

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const skipImports = new Set(["favicon.png", "favicon.webp"]);

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

async function toWebp(inputPath, outputPath) {
  await sharp(inputPath)
    .rotate()
    .webp({ quality: 78, effort: 5 })
    .toFile(outputPath);
}

async function toFallback(inputPath, outputPath) {
  const ext = path.extname(outputPath).toLowerCase();
  const pipeline = sharp(inputPath).rotate();
  if (ext === ".jpg" || ext === ".jpeg") {
    await pipeline.jpeg({ quality: 78, mozjpeg: true }).toFile(outputPath);
    return;
  }
  if (ext === ".png") {
    await pipeline.png({ compressionLevel: 9, quality: 80, effort: 9 }).toFile(outputPath);
    return;
  }
  await pipeline.toFile(outputPath);
}

async function run() {
  fs.mkdirSync(assetsDir, { recursive: true });

  for (const item of coreConversions) {
    const src = item.src;
    const srcPath = path.join(assetsDir, src);
    const webpPath = path.join(assetsDir, item.webp);
    const fallbackPath = path.join(assetsDir, item.fallback);
    if (!fs.existsSync(srcPath)) {
      console.warn(`[skip] Missing core source: ${src}`);
      continue;
    }
    await toWebp(srcPath, webpPath);
    await toFallback(srcPath, fallbackPath);
    console.log(`[ok] ${src} -> ${item.webp} + ${item.fallback}`);
  }

  if (!fs.existsSync(importsDir)) {
    console.log("[done] No imports directory found.");
    return;
  }

  const importFiles = fs.readdirSync(importsDir, { withFileTypes: true })
    .filter((item) => item.isFile())
    .map((item) => item.name)
    .filter((name) => imageExtensions.has(path.extname(name).toLowerCase()));

  const importedOutputs = [];

  for (const fileName of importFiles) {
    const ext = path.extname(fileName).toLowerCase();
    if (!imageExtensions.has(ext)) continue;

    const base = path.basename(fileName, ext);
    const safeBase = slugify(base);
    if (!safeBase) continue;

    const outputName = `${safeBase}.webp`;
    if (skipImports.has(outputName)) continue;

    const inputPath = path.join(importsDir, fileName);
    const outputPath = path.join(assetsDir, outputName);

    await toWebp(inputPath, outputPath);
    importedOutputs.push(outputName);
    console.log(`[import] ${fileName} -> ${outputName}`);
  }

  const manifestPath = path.join(root, "assets", "images", "imported-images.json");
  fs.writeFileSync(
    manifestPath,
    JSON.stringify({ generatedAt: new Date().toISOString(), files: importedOutputs.sort() }, null, 2),
    "utf8"
  );

  console.log(`[done] Imported ${importedOutputs.length} images`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
