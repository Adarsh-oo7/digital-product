const fs = require("fs");
const path = require("path");

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (/\.(tsx|ts|jsx|js|html|css)$/.test(file)) {
      results.push(full);
    }
  });
  return results;
}

const files = walk("./src");
const imageRegex = /["'`]((\.{0,2}\/)?img\/[^"'`\?#]+(?:\.(?:jpg|jpeg|png|webp|svg)))["'`]/gi;
let allFound = new Set();
let broken = [];

// Strict Linux case-checking cache
const dirFilesMap = new Map();
function fileExistsCaseSensitive(cleanPath) {
  const dir = path.join("./public", path.dirname(cleanPath));
  const base = path.basename(cleanPath);
  if (!fs.existsSync(dir)) return false;
  if (!dirFilesMap.has(dir)) {
    dirFilesMap.set(dir, fs.readdirSync(dir));
  }
  return dirFilesMap.get(dir).includes(base);
}

files.forEach(f => {
  const content = fs.readFileSync(f, "utf8");
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    const imgPath = match[1];
    allFound.add(imgPath);
    const cleanPath = decodeURIComponent(imgPath.replace(/^\.?\.?\/?/, ""));
    if (!fileExistsCaseSensitive(cleanPath)) {
      broken.push({ file: f, ref: imgPath, expectedPublic: path.join("./public", cleanPath) });
    }
  }
});

console.log("Total unique image paths referenced:", allFound.size);
console.log("Broken references count:", broken.length);
if (broken.length > 0) {
  console.log("Broken references:", JSON.stringify(broken, null, 2));
} else {
  console.log("All image references successfully match files in public/ with strict case!");
}

const relRegex = /["'`](\.{1,2}\/img\/[^"'`]+)["'`]/g;
let relCount = 0;
files.forEach(f => {
  const content = fs.readFileSync(f, "utf8");
  let m;
  while ((m = relRegex.exec(content)) !== null) {
    console.log("Relative path in", f, ":", m[1]);
    relCount++;
  }
});
console.log("Total relative image references (./ or ../):", relCount);

if (broken.length > 0 || relCount > 0) {
  console.error("❌ Image validation failed: Broken or relative paths detected.");
  process.exit(1);
} else {
  console.log("✅ Image validation passed.");
}
