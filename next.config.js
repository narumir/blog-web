const isProduction = process.env.NODE_ENV === "production";

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
  assetPrefix: isProduction ? "https://static-blog.narumir.io" : "",
};

module.exports = nextConfig;
