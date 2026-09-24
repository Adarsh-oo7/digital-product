const fs = require("fs");
const crypto = require("crypto");

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

async function getAccessToken(credentials, scopes) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: credentials.client_email,
    scope: scopes.join(" "),
    aud: credentials.token_uri || "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = base64url(JSON.stringify(header));
  const encodedClaim = base64url(JSON.stringify(claim));
  const signInput = `${encodedHeader}.${encodedClaim}`;

  const signer = crypto.createSign("RSA-SHA256");
  signer.update(signInput);
  const signature = signer.sign(credentials.private_key, "base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  const jwt = `${signInput}.${signature}`;

  const res = await fetch(credentials.token_uri || "https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(`Token exchange failed: ${JSON.stringify(data)}`);
  return data.access_token;
}

function formatDate(d) {
  return d.toISOString().split("T")[0];
}

async function main() {
  const creds = JSON.parse(fs.readFileSync("./gsc-credentials.json", "utf8"));
  const scopes = [
    "https://www.googleapis.com/auth/webmasters.readonly",
    "https://www.googleapis.com/auth/analytics.readonly",
  ];
  const token = await getAccessToken(creds, scopes);
  const siteUrl = "https://www.digitalproductsolutions.in/";
  const gaProperty = "properties/555459287";

  const now = new Date();
  const d90 = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
  const d30 = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const d7 = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const endDate = formatDate(now);
  const startDate90 = formatDate(d90);
  const startDate30 = formatDate(d30);
  const startDate7 = formatDate(d7);

  console.log(`Analyzing data for ${siteUrl} (${startDate90} to ${endDate})\n`);

  // --- 1. GSC SITEMAPS ---
  console.log("=== 1. GOOGLE SEARCH CONSOLE SITEMAPS ===");
  const sitemapsRes = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const sitemapsData = await sitemapsRes.json();
  console.log(JSON.stringify(sitemapsData, null, 2));

  // --- 2. GSC OVERALL PERFORMANCE (LAST 90 DAYS) ---
  console.log("\n=== 2. GSC TOTAL PERFORMANCE (LAST 90 DAYS) ===");
  const totalsRes = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: startDate90,
        endDate: endDate,
      }),
    }
  );
  const totalsData = await totalsRes.json();
  console.log("Totals:", JSON.stringify(totalsData, null, 2));

  // --- 3. GSC TOP QUERIES ---
  console.log("\n=== 3. GSC TOP SEARCH QUERIES ===");
  const queriesRes = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: startDate90,
        endDate: endDate,
        dimensions: ["query"],
        rowLimit: 50,
      }),
    }
  );
  const queriesData = await queriesRes.json();
  console.log("Top Queries (up to 50):", JSON.stringify(queriesData.rows || [], null, 2));

  // --- 4. GSC TOP PAGES ---
  console.log("\n=== 4. GSC TOP PAGES ===");
  const pagesRes = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: startDate90,
        endDate: endDate,
        dimensions: ["page"],
        rowLimit: 50,
      }),
    }
  );
  const pagesData = await pagesRes.json();
  console.log("Top Pages (up to 50):", JSON.stringify(pagesData.rows || [], null, 2));

  // --- 5. GSC QUERY + PAGE COMBINATION (LAST 30 DAYS) ---
  console.log("\n=== 5. GSC QUERY + PAGE MAPPINGS (LAST 30 DAYS) ===");
  const queryPagesRes = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: startDate30,
        endDate: endDate,
        dimensions: ["query", "page"],
        rowLimit: 50,
      }),
    }
  );
  const queryPagesData = await queryPagesRes.json();
  console.log("Query + Page Mappings:", JSON.stringify(queryPagesData.rows || [], null, 2));

  // --- 6. GA4 OVERALL TRAFFIC REPORT ---
  console.log("\n=== 6. GA4 OVERALL TRAFFIC METRICS (LAST 30 DAYS) ===");
  const gaOverviewRes = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/${gaProperty}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        metrics: [
          { name: "activeUsers" },
          { name: "sessions" },
          { name: "screenPageViews" },
          { name: "averageSessionDuration" },
          { name: "bounceRate" },
          { name: "engagementRate" },
        ],
      }),
    }
  );
  const gaOverview = await gaOverviewRes.json();
  console.log("GA4 Overview:", JSON.stringify(gaOverview, null, 2));

  // --- 7. GA4 TRAFFIC SOURCES ---
  console.log("\n=== 7. GA4 TRAFFIC SOURCES ===");
  const gaSourcesRes = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/${gaProperty}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        dimensions: [{ name: "sessionDefaultChannelGroup" }, { name: "sessionSource" }],
        metrics: [
          { name: "sessions" },
          { name: "activeUsers" },
          { name: "engagementRate" },
        ],
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 20,
      }),
    }
  );
  const gaSources = await gaSourcesRes.json();
  console.log("GA4 Traffic Sources:", JSON.stringify(gaSources, null, 2));

  // --- 8. GA4 TOP PAGES ---
  console.log("\n=== 8. GA4 TOP PAGES VISITED ===");
  const gaPagesRes = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/${gaProperty}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        dimensions: [{ name: "pagePath" }],
        metrics: [
          { name: "screenPageViews" },
          { name: "activeUsers" },
          { name: "userEngagementDuration" },
        ],
        orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
        limit: 25,
      }),
    }
  );
  const gaPages = await gaPagesRes.json();
  console.log("GA4 Top Pages:", JSON.stringify(gaPages, null, 2));

  // --- 9. GA4 GEOGRAPHY & DEVICES ---
  console.log("\n=== 9. GA4 LOCATIONS & DEVICES ===");
  const gaGeoRes = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/${gaProperty}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        dimensions: [{ name: "city" }, { name: "deviceCategory" }],
        metrics: [{ name: "activeUsers" }, { name: "sessions" }],
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 20,
      }),
    }
  );
  const gaGeo = await gaGeoRes.json();
  console.log("GA4 Geo & Device:", JSON.stringify(gaGeo, null, 2));

  // Save the full raw data to an output file for record
  const fullReport = {
    generatedAt: new Date().toISOString(),
    sitemaps: sitemapsData,
    gscTotals: totalsData,
    gscQueries: queriesData,
    gscPages: pagesData,
    gscQueryPages: queryPagesData,
    gaOverview,
    gaSources,
    gaPages,
    gaGeo,
  };
  fs.writeFileSync("./scripts/seo-audit-results.json", JSON.stringify(fullReport, null, 2));
  console.log("\nSaved full audit data to scripts/seo-audit-results.json");
}

main().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
