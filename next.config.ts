import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // basePath: "/2048-in-react",
  // output: "export",
  // reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bp-content-cms.nyc3.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/articles",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
