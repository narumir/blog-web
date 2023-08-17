/**
 *  @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "custom",
    loaderFile: "./image_loader.js",
  },
  output: "standalone",
};

module.exports = nextConfig;
