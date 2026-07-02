const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const siteUrl = "https://www.kayserihanedannakliyat.com.tr";

function read(filePath) {
	return fs.readFileSync(path.join(root, filePath), "utf8");
}

function filePathFromUrl(url) {
	const clean = url.replace(siteUrl, "");
	if (clean === "/") return "index.html";
	return `${clean.replace(/^\//, "")}index.html`;
}

function extractLocs(xml) {
	return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

function hasMetaDescription(html) {
	return /<meta\s+name="description"\s+content="[^"]+"\s*>/i.test(html);
}

function canonicalHref(html) {
	const match = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"\s*>/i);
	return match ? match[1] : "";
}

function titleText(html) {
	const match = html.match(/<title>([^<]+)<\/title>/i);
	return match ? match[1].trim() : "";
}

function run() {
	const errors = [];
	const sitemapXml = read("sitemap.xml");
	const urls = extractLocs(sitemapXml);

	if (!urls.length) {
		errors.push("sitemap.xml does not include any <loc> entries.");
	}

	for (const url of urls) {
		if (!url.startsWith(siteUrl)) {
			errors.push(`URL does not use canonical domain: ${url}`);
			continue;
		}

		const relativePath = filePathFromUrl(url);
		const absolutePath = path.join(root, relativePath);
		if (!fs.existsSync(absolutePath)) {
			errors.push(`Generated file missing for ${url} -> ${relativePath}`);
			continue;
		}

		const html = fs.readFileSync(absolutePath, "utf8");
		const canonical = canonicalHref(html);
		const title = titleText(html);

		if (!canonical) {
			errors.push(`Canonical tag missing in ${relativePath}`);
		} else if (canonical !== url) {
			errors.push(`Canonical mismatch in ${relativePath}: expected ${url}, found ${canonical}`);
		}

		if (!title) {
			errors.push(`Title tag missing/empty in ${relativePath}`);
		}

		if (!hasMetaDescription(html)) {
			errors.push(`Meta description missing/empty in ${relativePath}`);
		}
	}

	const verificationPath = path.join(root, "google54d369dadfdd11d8.html");
	if (!fs.existsSync(verificationPath)) {
		errors.push("Google Search Console verification file is missing at project root.");
	}

	if (errors.length) {
		console.error(`Smoke check failed with ${errors.length} issue(s):`);
		errors.forEach((issue) => console.error(`- ${issue}`));
		process.exit(1);
	}

	console.log(`Smoke check passed: ${urls.length} URLs validated.`);
}

run();
