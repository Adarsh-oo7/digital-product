/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.digitalproductsolutions.in',
  generateRobotsTxt: false, // We manage robots.txt manually
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin', '/private', '/api', '/certificate-verified'],
  additionalPaths: async (config) => {
    const result = [];
    // Phase 1 Pages
    const phase1 = [
      '/ai-chatbot-development-kerala',
      '/whatsapp-automation-kerala',
      '/digital-marketing-trivandrum',
      '/local-seo-kerala',
      '/website-development-for-hospitals-clinics-kerala',
    ];
    // Phase 2 Pages
    const phase2 = [
      '/website-development-for-hotels-resorts-kerala',
      '/seo-for-doctors-clinics-kerala',
      '/google-ads-management-kerala',
      '/ecommerce-website-development-kerala',
      '/ai-automation-for-businesses-kerala',
    ];
    // Phase 3 Pages
    const phase3 = [
      '/odoo-erp-development-kerala',
      '/school-education-management-software-kerala',
      '/restaurant-website-online-ordering-kerala',
      '/real-estate-builder-website-development-kerala',
      '/ai-agent-rag-development-india',
    ];
    // City Pages
    const cityPages = [
      '/digital-marketing-kollam',
      '/digital-marketing-kozhikode',
      '/seo-services-kannur',
      '/web-development-kottayam',
      '/web-development-palakkad',
    ];
    // Blog Posts
    const blogPosts = [
      '/blog/website-cost-kerala-2026',
      '/blog/whatsapp-automation-restaurants-kerala',
      '/blog/ai-chatbots-clinics-kerala',
      '/blog/local-seo-checklist-kerala',
      '/blog/odoo-erp-kerala-manufacturers',
      '/blog/ayurvedic-clinic-website-kerala',
      '/blog/digital-marketing-hotels-kerala',
    ];

    [...phase1, ...phase2, ...phase3, ...cityPages, ...blogPosts].forEach(path => {
      result.push({ loc: path, changefreq: 'weekly', priority: 0.8, lastmod: '2026-06-12' });
    });

    return result;
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin', '/api', '/private'] },
    ],
    additionalSitemaps: [
      'https://www.digitalproductsolutions.in/sitemap-0.xml',
    ],
  },
};