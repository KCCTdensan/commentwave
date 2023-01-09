const { apiBase } = require("./src/constants.js")

module.exports = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/room",
      destination: "/",
      permanent: true,
    },
  ],
  rewrites: async () => [
    {
      source: "/api/:path",
      destination: `${apiBase}/:path`,
    },
  ],
}
