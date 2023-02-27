/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcMinify: true,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
