/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Digital-Product/' : '', // Corrected repo name
};

module.exports = nextConfig;