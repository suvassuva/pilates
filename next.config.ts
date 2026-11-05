import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
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
