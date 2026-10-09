const fs = require('fs');
const https = require('https');
const crypto = require('crypto');
const path = require('path');

function getAccessToken(creds, scopes) {
  return new Promise((resolve, reject) => {
    const header = { alg: 'RS256', typ: 'JWT' };
    const now = Math.floor(Date.now() / 1000);
    const claim = {
      iss: creds.client_email,
      scope: scopes.join(' '),
      aud: creds.token_uri,
      exp: now + 3600,
      iat: now,
    };
    const sHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
    const sClaim = Buffer.from(JSON.stringify(claim)).toString('base64url');
    const sign = crypto.createSign('RSA-SHA256');
    sign.update(sHeader + '.' + sClaim);
    const signature = sign.sign(creds.private_key, 'base64url');
    const jwt = sHeader + '.' + sClaim + '.' + signature;

    const postData = 'grant_type=' + encodeURIComponent('urn:ietf:params:oauth:grant-type:jwt-bearer') + '&assertion=' + encodeURIComponent(jwt);
    const req = https.request(creds.token_uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData),
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.access_token) resolve(parsed.access_token);
          else reject(new Error(JSON.stringify(parsed)));
        } catch(e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

function inspectUrl(token, inspectionUrl, siteUrl) {
  return new Promise((resolve) => {
    const postData = JSON.stringify({ inspectionUrl, siteUrl });
    const req = https.request({
      hostname: 'searchconsole.googleapis.com',
      path: '/v1/urlInspection/index:inspect',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, data: JSON.parse(data) }); }
        catch(e) { resolve({ status: res.statusCode, raw: data }); }
      });
    });
    req.on('error', (err) => resolve({ status: 'ERROR', error: err.message }));
    req.write(postData);
    req.end();
  });
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function main() {
  const creds = JSON.parse(fs.readFileSync('gsc-credentials.json', 'utf8'));
  const token = await getAccessToken(creds, ['https://www.googleapis.com/auth/webmasters']);
  const siteUrl = 'https://www.digitalproductsolutions.in/';
  
  const sitemapXml = fs.readFileSync('public/sitemap.xml', 'utf8');
  const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

  console.log(`Inspecting first batch of 25 priority URLs in Search Console...`);
  
  // Sample across core pages, Kerala CRM, industry pages, and work
  const priorityUrls = [
    'https://www.digitalproductsolutions.in/',
    'https://www.digitalproductsolutions.in/about',
    'https://www.digitalproductsolutions.in/services',
    'https://www.digitalproductsolutions.in/pricing',
    'https://www.digitalproductsolutions.in/portfolio',
    'https://www.digitalproductsolutions.in/contact',
    'https://www.digitalproductsolutions.in/all-pages',
    'https://www.digitalproductsolutions.in/crm-software-kerala',
    'https://www.digitalproductsolutions.in/seo-services-kerala',
    'https://www.digitalproductsolutions.in/app-development-kerala',
    'https://www.digitalproductsolutions.in/ai-services',
    'https://www.digitalproductsolutions.in/ai-automation-for-businesses-kerala',
    'https://www.digitalproductsolutions.in/clinic-management-software-kerala',
    'https://www.digitalproductsolutions.in/real-estate-crm-lead-management-kerala',
    'https://www.digitalproductsolutions.in/construction-crm-kerala',
    'https://www.digitalproductsolutions.in/wedding-planner-crm-kerala',
    'https://www.digitalproductsolutions.in/gym-crm-kerala',
    'https://www.digitalproductsolutions.in/travel-agency-crm-kerala',
    'https://www.digitalproductsolutions.in/hospital-website-development-kerala',
    'https://www.digitalproductsolutions.in/hotel-booking-website-kerala',
    'https://www.digitalproductsolutions.in/restaurant-website-online-ordering-kerala',
    'https://www.digitalproductsolutions.in/work',
    'https://www.digitalproductsolutions.in/digital-product-solutions-reviews',
    'https://www.digitalproductsolutions.in/website-cost-calculator',
    'https://www.digitalproductsolutions.in/project-cost-estimator'
  ];

  const results = { indexed: [], notIndexed: [] };

  for (const url of priorityUrls) {
    const res = await inspectUrl(token, url, siteUrl);
    if (res.data && res.data.inspectionResult) {
      const idx = res.data.inspectionResult.indexStatusResult;
      const verdict = idx ? idx.verdict : 'UNKNOWN';
      const coverage = idx ? idx.coverageState : 'UNKNOWN';
      if (verdict === 'PASS') {
        results.indexed.push({ url, coverage });
        console.log(`[INDEXED] ${url}`);
      } else {
        results.notIndexed.push({ url, coverage, verdict, indexingState: idx?.indexingState, canonical: idx?.googleCanonical });
        console.log(`[NOT INDEXED] ${url} -> ${coverage} (${idx?.indexingState || ''})`);
      }
    } else {
      console.log(`[ERROR] ${url}:`, res.status);
    }
    await sleep(200);
  }

  console.log('\n=== INSPECTION SUMMARY ===');
  console.log('Indexed:', results.indexed.length);
  console.log('Not Indexed:', results.notIndexed.length);
  fs.writeFileSync('scripts/gsc-inspection-results.json', JSON.stringify(results, null, 2));
}

main();
