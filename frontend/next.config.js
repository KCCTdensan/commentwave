import { apiBase } from "./src/constants.js"

export default {
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
