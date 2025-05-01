import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.mp4$/,
      use: 'file-loader'
    })
    return config
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'images.unsplash.com']
  }
}

export default nextConfig
