const { apiBase } = require("./src/constants.js")

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  rewrites: async () => [
    {
      source: "/api/:path",
      destination: `${apiBase}/:path`,
    },
  ],
}
