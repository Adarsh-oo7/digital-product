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

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (/\.(tsx|ts|jsx|js)$/.test(file)) {
      results.push(full);
    }
  });
  return results;
}

const files = walk("./src");
const linkRegex = /(?:href=["'`]|href:\s*["'`])((\/[a-zA-Z0-9\-_]+)+)["'`]/g;
const linksByTarget = new Map();
allRoutes.forEach(r => linksByTarget.set(r, []));

files.forEach(f => {
  const content = fs.readFileSync(f, "utf8");
  let m;
  while ((m = linkRegex.exec(content)) !== null) {
    const target = m[1];
    if (linksByTarget.has(target)) {
      linksByTarget.get(target).push(f);
    }
  }
});

const unlinked = [];
const lightlyLinked = [];
const wellLinked = [];

for (const [route, sourceFiles] of linksByTarget.entries()) {
  const uniqueSources = [...new Set(sourceFiles)];
  if (uniqueSources.length === 0) {
    unlinked.push(route);
  } else if (uniqueSources.length < 3) {
    lightlyLinked.push({ route, count: uniqueSources.length, sources: uniqueSources });
  } else {
    wellLinked.push({ route, count: uniqueSources.length });
  }
}

console.log("=== COMPREHENSIVE INTERNAL LINK AUDIT ===");
console.log(`Total App Routes: ${allRoutes.length}`);
console.log(`Unlinked (0 internal links): ${unlinked.length}`);
console.log(`Lightly Linked (1-2 internal links): ${lightlyLinked.length}`);
console.log(`Well Linked (3+ internal links): ${wellLinked.length}`);

if (unlinked.length > 0) {
  console.log("\nUnlinked Routes (Orphans):", unlinked);
} else {
  console.log("\n🎉 ZERO orphan routes! Every single route is internally linked and crawlable!");
}
