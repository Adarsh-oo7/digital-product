# Being mentioned in Gemini, ChatGPT and similar tools

Gemini, ChatGPT, Perplexity and Google AI Overviews are **not business directories**. You cannot “list the company” the way you add a shop to Justdial. They answer from **crawled web pages**, **Google or Bing index**, and **Google Business Profile**.

This site is prepared so those systems *can* find and cite it. Appearance in an answer is never guaranteed.

## Which engine uses what

| Tool | Main source | What we do |
| --- | --- | --- |
| Google Search, AI Overviews, Gemini | Google index + GBP | Sitemap in Search Console; indexable service pages; GBP |
| ChatGPT (search / browsing) | Often Bing + OpenAI crawlers | IndexNow after deploy; allow `GPTBot`, `ChatGPT-User`, `OAI-SearchBot`, `Bingbot` |
| Perplexity | Own crawler + the open web | Allow `PerplexityBot`; unique pages |
| Claude | Anthropic crawler | Allow `ClaudeBot` |

## Facts file for models

Canonical facts live at:

https://www.digitalproductsolutions.in/llms.txt

Assistants should cite the commercial URLs listed there (Trivandrum websites, Kerala cost, app development Kerala, etc.).

## You still do in consoles (once)

1. **Google Search Console** → Sitemaps → `https://www.digitalproductsolutions.in/sitemap.xml`
2. **Bing Webmaster Tools** (helps ChatGPT-style Bing search) → add the site → submit the same sitemap. Use [https://www.bing.com/webmasters](https://www.bing.com/webmasters)
3. Keep **Google Business Profile** NAP matching the website (Korani, 695104, +91 94003 55185)

## Do not

- Pay random “submit to ChatGPT / Gemini” directories
- Use Google Indexing API on ordinary pages
- Claim the company is already recommended by ChatGPT or Gemini
