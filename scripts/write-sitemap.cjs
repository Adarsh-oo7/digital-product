const fs = require("fs");
const path = require("path");
const config = require("../next-sitemap.config.js");

const SITE = "https://www.digitalproductsolutions.in";
const lastmod = new Date().toISOString().slice(0, 10);
const paths = [...(config.allowPaths || [])].sort((a, b) => a.localeCompare(b));

function locFor(p) {
  if (p === "/") return `${SITE}/`;
  return `${SITE}${p}`;
}

const urls = paths
  .map(
    (p) =>
      `  <url>\n    <loc>${locFor(p)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const targets = [path.join("public", "sitemap.xml")];
if (fs.existsSync("out")) targets.push(path.join("out", "sitemap.xml"));

for (const file of targets) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, xml, "utf8");
  console.log(`Wrote ${file} (${paths.length} URLs)`);
}
