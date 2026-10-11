/**
 * Bing Webmaster Tools API Automation
 * - Submits sitemap and URLs directly to Bing Webmaster Tools
 * - Checks crawl issues and query rankings
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const BING_API_KEY = process.env.BING_API_KEY || '0227f1ee3d5049a7a1c3b41243e15290';
const SITE_URL = 'https://www.digitalproductsolutions.in/';

function callBingApi(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(`https://ssl.bing.com/webmaster/api.svc/json/${path}`);
    url.searchParams.set('apikey', BING_API_KEY);

    const postData = body ? JSON.stringify(body) : null;
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
    if (postData) {
      options.headers['Content-Length'] = Buffer.byteLength(postData);
    }

    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, data: parsed.d });
        } catch (e) {
          resolve({ status: res.statusCode, data });
        }
      });
    });

    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

async function main() {
  console.log('=== BING WEBMASTER TOOLS API SYNC ===');
  console.log(`Site: ${SITE_URL}`);

  // 1. Check Quota
  const quotaRes = await callBingApi('GET', `GetUrlSubmissionQuota?siteUrl=${encodeURIComponent(SITE_URL)}`);
  console.log(`Daily Quota Remaining: ${quotaRes.data?.DailyQuota || 'N/A'}`);

  // 2. Read sitemap and submit URLs
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    const xml = fs.readFileSync(sitemapPath, 'utf8');
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    console.log(`Loaded ${urls.length} URLs from sitemap.`);

    // Batch submit up to 500 URLs at a time (Bing limit per request)
    const batchSize = 100;
    const batch = urls.slice(0, batchSize);
    console.log(`Submitting batch of ${batch.length} URLs to Bing...`);
    const submitRes = await callBingApi('POST', 'SubmitUrlbatch', {
      siteUrl: SITE_URL,
      urlList: batch,
    });
    console.log(`Submit batch response: ${submitRes.status === 200 ? '200 OK (Success)' : submitRes.status}`);

    // Submit sitemap feed
    console.log('Submitting sitemap feed to Bing...');
    const feedRes = await callBingApi('POST', 'SubmitFeed', {
      siteUrl: SITE_URL,
      feedUrl: `${SITE_URL}sitemap.xml`,
    });
    console.log(`Sitemap feed response: ${feedRes.status === 200 ? '200 OK (Success)' : feedRes.status}`);
  }

  // 3. Check Crawl Issues
  const issuesRes = await callBingApi('GET', `GetCrawlIssues?siteUrl=${encodeURIComponent(SITE_URL)}`);
  const issueCount = Array.isArray(issuesRes.data) ? issuesRes.data.length : 0;
  console.log(`Current Bing Crawl Issues: ${issueCount}`);

  // 4. Query Stats (Top queries)
  const statsRes = await callBingApi('GET', `GetQueryStats?siteUrl=${encodeURIComponent(SITE_URL)}`);
  if (Array.isArray(statsRes.data) && statsRes.data.length > 0) {
    console.log('\nTop Ranking Queries on Bing:');
    statsRes.data.slice(0, 8).forEach((q, i) => {
      console.log(
        `  ${i + 1}. "${q.Query}" | Pos: ${q.AvgImpressionPosition} | Impr: ${q.Impressions} | Clicks: ${q.Clicks}`
      );
    });
  }

  console.log('\n=== BING SYNC COMPLETE ===');
}

main().catch((err) => {
  console.error('Error during Bing Webmaster sync:', err);
});
