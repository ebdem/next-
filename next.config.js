/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  experimental: {
    appDir: true,
    swcMinify: true,
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
