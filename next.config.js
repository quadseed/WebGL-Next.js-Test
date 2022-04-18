/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.GITHUB_ACTIONS ? "/WebGL-Next.js-Test" : "",
  basePath: process.env.GITHUB_ACTIONS ? "/WebGL-Next.js-Test" : "",
  trailingSlash: true,
}

module.exports = nextConfig
