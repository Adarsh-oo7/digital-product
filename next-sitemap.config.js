/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://digital-product.adarshbs.com', // Replace with your domain
    generateRobotsTxt: true, // Automatically generate robots.txt
    changefreq: 'weekly', // Change frequency of the pages
    priority: 0.7, // Default priority for pages
    sitemapSize: 5000, // Max URLs per sitemap file
    exclude: ['/admin', '/private', '/api'], // Paths to exclude
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://digital-product.adarshbs.com/sitemap-0.xml', // Replace if you have custom sitemaps
      ],
    },
  };
  