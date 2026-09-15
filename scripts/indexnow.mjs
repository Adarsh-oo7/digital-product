/**
 * Notify IndexNow (Bing, Yandex, and other participating engines)
 * after a successful live deploy.
 *
 * Google Search does not support IndexNow. Google's official bulk path
 * is the sitemap in Search Console.
 */
const HOST = "www.digitalproductsolutions.in";
const SITE = `https://${HOST}`;
const KEY = "a7c4e9f21b6d4c08a35e91f0c2b7d846";
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`, {
    headers: { "User-Agent": "DigitalProductSolutions-IndexNow/1.0" },
  });
  if (!res.ok) {
    throw new Error(`Could not fetch live sitemap (${res.status}). Deploy may not be public yet.`);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/gi)].map((m) => m[1].trim());
  return [...new Set(urls)];
}

async function main() {
  const urlList = await sitemapUrls();
  if (urlList.length === 0) {
    throw new Error("Sitemap contained no URLs.");
  }

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  console.log(`IndexNow ${res.status} for ${urlList.length} URLs`);
  if (text) console.log(text);
  // 200 / 202 are success. 4xx means key or payload problem.
  if (res.status !== 200 && res.status !== 202) {
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exitCode = 1;
});
