/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/source'
    })

    return config
  },
}

module.exports = nextConfig
