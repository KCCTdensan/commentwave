/** @type {import("next").NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
