/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/WebGL-Next.js-Test" : "",
  basePath: process.env.NODE_ENV === "production" ? "/WebGL-Next.js-Test" : "",
  trailingSlash: true,
}

module.exports = nextConfig
