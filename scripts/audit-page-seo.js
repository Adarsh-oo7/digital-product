const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'src', 'app');

function getPageFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(getPageFiles(filePath));
    } else if (file === 'page.tsx') {
      results.push(filePath);
    }
  }
  return results;
}

const pageFiles = getPageFiles(APP_DIR);
console.log(`Found ${pageFiles.length} page.tsx files in src/app/`);

const missingMetadata = [];
const shortMetadata = [];

for (const f of pageFiles) {
  const relPath = path.relative(APP_DIR, f);
  const route = '/' + path.dirname(relPath).replace(/\\/g, '/').replace(/^\.$/, '');
  const content = fs.readFileSync(f, 'utf8');

  const hasMetadata = content.includes('export const metadata') || content.includes('export async function generateMetadata');
  if (!hasMetadata) {
    missingMetadata.push({ route, file: relPath });
  }
}

console.log(`\nPages without explicit metadata export: ${missingMetadata.length}`);
missingMetadata.forEach(m => console.log(` - ${m.route} (${m.file})`));
