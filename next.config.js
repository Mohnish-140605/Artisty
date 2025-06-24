/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/Artisty',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
