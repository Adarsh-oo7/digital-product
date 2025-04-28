/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Export static HTML/CSS/JS files
  images: {
    unoptimized: true, // Disable server-side image optimization
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/Digital-Product/" : "", // Use repo name as the prefix for production
  async headers() {
    return [
      {
        // Apply headers to all routes
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://formsubmit.co; frame-ancestors 'none';",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;