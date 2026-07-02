const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = process.cwd();
const assetsDir = path.join(root, "assets", "images");
const importsDir = path.join(root, "G\u00f6rseller");

const coreConversions = [
  ["hero-slide-1.png", "hero-slide-1.webp"],
  ["hero-slide-4.jpeg", "hero-slide-4.webp"],
  ["hanedan-arac.jpeg", "hanedan-arac.webp"],
  ["hanedan-arac-bina.jpeg", "hanedan-arac-bina.webp"],
  ["logo.png", "logo.webp"],
  ["logo-navbar.png", "logo-navbar.webp"]
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

async function run() {
  fs.mkdirSync(assetsDir, { recursive: true });

  for (const [src, dest] of coreConversions) {
    const srcPath = path.join(assetsDir, src);
    const destPath = path.join(assetsDir, dest);
    if (!fs.existsSync(srcPath)) {
      console.warn(`[skip] Missing core source: ${src}`);
      continue;
    }
    await toWebp(srcPath, destPath);
    console.log(`[ok] ${src} -> ${dest}`);
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
