/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'marakasstorageaccount.blob.core.windows.net',
        port: '',
        pathname: '/marakas-image-container/**',
      },
    ],
  }
}

module.exports = nextConfig

