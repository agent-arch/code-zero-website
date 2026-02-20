import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.code-zero.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
