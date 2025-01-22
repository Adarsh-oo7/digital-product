/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Export static HTML/CSS/JS files
  images: {
    unoptimized: true, // Disable server-side image optimization
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Digital-Product/' : '', // Use repo name as the prefix for production
};

module.exports = nextConfig;
