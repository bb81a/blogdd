/* eslint @typescript-eslint/no-var-requires: "off" */
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

module.exports = withContentlayer(nextConfig)
