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

function publishUrl(token, url) {
  return new Promise((resolve) => {
    const postData = JSON.stringify({
      url,
      type: 'URL_UPDATED'
    });

    const req = https.request({
      hostname: 'indexing.googleapis.com',
      path: '/v3/urlNotifications:publish',
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
        resolve({ url, status: res.statusCode, data });
      });
    });
    req.on('error', (err) => {
      resolve({ url, status: 'ERROR', error: err.message });
    });
    req.write(postData);
    req.end();
  });
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function main() {
  const credsPath = path.join(__dirname, '..', 'gsc-credentials.json');
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

  if (!fs.existsSync(credsPath)) {
    console.error('Credentials file not found');
    process.exit(1);
  }

  const creds = JSON.parse(fs.readFileSync(credsPath, 'utf8'));
  console.log('Authenticating service account:', creds.client_email);
  const token = await getAccessToken(creds, ['https://www.googleapis.com/auth/indexing']);

  const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
  const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

  console.log(`Starting Google Indexing API submission for ${urls.length} URLs...\n`);

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const res = await publishUrl(token, url);
    if (res.status === 200) {
      successCount++;
      console.log(`[${i + 1}/${urls.length}] 200 OK: ${url}`);
    } else {
      failCount++;
      console.error(`[${i + 1}/${urls.length}] ${res.status}: ${url}`);
      try {
        const parsed = JSON.parse(res.data);
        if (parsed.error) console.error('   Error:', parsed.error.message);
      } catch (e) {}
    }
    // Respect rate limits: 100ms pause between requests
    await sleep(100);
  }

  console.log(`\n=== GOOGLE INDEXING COMPLETE ===`);
  console.log(`Total URLs: ${urls.length}`);
  console.log(`Successfully Notified Googlebot: ${successCount}`);
  console.log(`Failed: ${failCount}`);
}

main();
