/**
 *  @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    loader: 'custom',
    loaderFile: './image_loader.js',
  },
};

module.exports = nextConfig;
