import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/blog/:slug",
        destination: "/blog",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
