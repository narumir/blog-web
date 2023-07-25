const isProduction = process.env.NODE_ENV === "production";

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
  assetPrefix: isProduction ? "https://static-blog.narumir.io" : "",
};

module.exports = nextConfig;
