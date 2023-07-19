/**
 *  @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  output: "standalone",
  assetPrefix: "https://static-blog.narumir.io",
};

module.exports = nextConfig;
