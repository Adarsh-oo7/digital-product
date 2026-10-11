/**
 * Google Live Keyword & Search Query Explorer
 * Fetches real-time Google search suggestions (India/Kerala context)
 * and cross-references with Google Search Console performance data.
 */

const fs = require("fs");

async function fetchGoogleSuggestions(query) {
  try {
    const url = `https://suggestqueries.google.com/complete/search?client=chrome&hl=en&gl=in&q=${encodeURIComponent(query)}`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data[1]) ? data[1] : [];
  } catch (err) {
    return [];
  }
}

async function exploreKeywords(seedTerms) {
  console.log("=== GOOGLE LIVE SEARCH SUGGESTIONS (INDIA / KERALA) ===\n");
  const results = {};

  for (const term of seedTerms) {
    const suggestions = await fetchGoogleSuggestions(term);
    results[term] = suggestions;
    console.log(`📌 Seed: "${term}"`);
    if (suggestions.length === 0) {
      console.log("   (No direct suggestions found)");
    } else {
      suggestions.forEach((s, idx) => {
        console.log(`   ${idx + 1}. ${s}`);
      });
    }
    console.log("");
  }

  // Cross-reference with GSC data if available
  if (fs.existsSync("./scripts/seo-audit-results.json")) {
    try {
      const gscData = JSON.parse(fs.readFileSync("./scripts/seo-audit-results.json", "utf8"));
      if (gscData.gscQueries?.rows?.length) {
        console.log("=== CURRENT GOOGLE SEARCH CONSOLE RANKINGS (TOP 10) ===");
        gscData.gscQueries.rows.slice(0, 10).forEach((r, i) => {
          console.log(
            `${i + 1}. "${r.keys[0]}" | Impressions: ${r.impressions} | Clicks: ${r.clicks} | Pos: ${r.position.toFixed(1)}`
          );
        });
        console.log("");
      }
    } catch (_) {}
  }

  return results;
}

const inputTerms = process.argv.slice(2);
const defaultTerms = [
  "freelance web developer kerala",
  "freelance software developer kerala",
  "web development company in kerala",
  "crm software kerala",
  "whatsapp automation kerala",
  "ai chatbot kerala",
];

exploreKeywords(inputTerms.length > 0 ? inputTerms : defaultTerms);
