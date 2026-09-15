# How indexing actually works

There is **no switch that makes Google index every new URL automatically on demand**. Google decides after it crawls. What we can automate is “please crawl these published URLs.”

## Google Search Console (required, once, then leave it)

1. Open [Google Search Console](https://search.google.com/search-console) for `https://www.digitalproductsolutions.in/`.
2. **Sitemaps** → submit:
   `https://www.digitalproductsolutions.in/sitemap.xml`
3. Wait until it shows **Success** and a URL count (about 74). You do not resubmit this after every deploy unless the sitemap URL changes. Google recrawls it on its own.
4. For a few **priority** URLs only (quota is small, often around 10–20 requests per day):
   - URL Inspection → paste the live URL → **Test live URL**
   - Confirm `Indexing allowed? Yes` (no `noindex`)
   - **Request indexing**

Priority list to request once:

- `/`
- `/app-development-kerala`
- `/affordable-website-development-trivandrum`
- `/website-developer-trivandrum`
- `/website-development-cost-kerala`
- `/website-development`
- `/seo-services`
- `/ecommerce-website-development-kerala`
- `/freelance-web-developer-kerala`
- `/contact`

## Search Console: “Couldn't fetch”

That status means Google’s **retry** of the sitemap file failed. It does **not** mean the 74 URLs were never seen.

Typical pattern for this site:

- **Discovered pages: 74** — Google already read the sitemap (last successful read was 14 Sep 2026).
- **Submitted: 15 Sep 2026 / Couldn’t fetch** — a later fetch failed. Deploys that day briefly served GitHub’s generic 404 while Pages swapped artifacts.

The sitemap is a normal `200` `application/xml` file at:

https://www.digitalproductsolutions.in/sitemap.xml

**What to do**

1. Open that URL in Chrome. You should see XML, not a GitHub “Page not found” page.
2. In Search Console, open the sitemap row. Wait 24–72 hours, or use the menu to **resubmit** once. Do not spam resubmit.
3. Optional: URL Inspection of `https://www.digitalproductsolutions.in/sitemap.xml` → Test live URL.

Do not add a second sitemap URL unless Google asks. Keep using the www HTTPS file only.


## What this repo now automates

After each successful GitHub Pages deploy, CI submits the **live sitemap URLs** to [IndexNow](https://www.indexnow.org/). That notifies **Bing, Yandex and other IndexNow engines**. Google is **not** in IndexNow.

The public key file is:

`https://www.digitalproductsolutions.in/a7c4e9f21b6d4c08a35e91f0c2b7d846.txt`

## What Google forbids

Do not use Google’s **Indexing API** for ordinary website pages. It is only for job postings and livestream/broadcast pages. Using it for this marketing site can get the property restricted.

## What actually gets a page indexed

1. The URL is **indexable** (`index, follow`, self-canonical, in the sitemap).
2. Google can **crawl** it (not blocked in robots.txt).
3. Something **discovers** it: sitemap, internal links, or a manual inspect.
4. The page is **useful and unique**. Thin or duplicate URLs may stay “Crawled – currently not indexed.”

New URLs often take **days to weeks**. Live Test can look healthy long before the URL appears in `site:digitalproductsolutions.in`.
