const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const heroImg = '/assets/images/hero-slide-1.png';

function walk(dir, cb) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((ent) => {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, cb);
    else if (ent.isFile() && full.endsWith('.html')) cb(full);
  });
}

let modified = 0;
walk(root, (file) => {
  let s = fs.readFileSync(file, 'utf8');
  const re = /(<section\s+class="([^"]*page-hero[^"]*)"[^>]*>)([\s\S]*?<div\s+class="container"[^>]*>)([\s\S]*?)(<\/div>)([\s\S]*?<\/section>)/gi;
  let out = s.replace(re, (match, openSection, classes, openContainer, inner, closeContainer, rest) => {
    if (/class="[^"]*hero-media[^"]*"/.test(inner)) return match; // already has hero-media
    // insert image before closing container div
    const img = `\n      <img class="hero-media" src="${heroImg}" alt="Hero görseli">`;
    modified++;
    return openSection + openContainer + inner + img + closeContainer + rest;
  });
  if (out !== s) {
    fs.writeFileSync(file, out, 'utf8');
  }
});
console.log('Modified HTML files:', modified);