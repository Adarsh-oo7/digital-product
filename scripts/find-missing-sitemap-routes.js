const fs = require("fs");
const path = require("path");

function getRoutes(dir, base = "") {
  let routes = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.isDirectory()) {
      if (e.name.startsWith("(") || e.name.startsWith("_") || e.name === "api") continue;
      const sub = path.join(dir, e.name);
      const routePath = base + "/" + e.name;
      if (fs.existsSync(path.join(sub, "page.tsx")) || fs.existsSync(path.join(sub, "page.jsx"))) {
        routes.push(routePath);
      }
      routes = routes.concat(getRoutes(sub, routePath));
    }
  }
  return routes;
}

const allRoutes = getRoutes("./src/app").filter(r => !r.includes("["));

const sitemapContent = fs.readFileSync("./src/content/html-sitemap.ts", "utf8");
const hrefRegex = /href:\s*["']([^"']+)["']/g;
const sitemapHrefs = new Set();
let m;
while ((m = hrefRegex.exec(sitemapContent)) !== null) {
  sitemapHrefs.add(m[1]);
}

const missingFromHtmlSitemap = allRoutes.filter(r => !sitemapHrefs.has(r));
console.log(`Total app routes: ${allRoutes.length}`);
console.log(`Routes in html-sitemap.ts: ${sitemapHrefs.size}`);
console.log(`Missing from html-sitemap.ts: ${missingFromHtmlSitemap.length}`);
console.log("Missing routes:", missingFromHtmlSitemap);
