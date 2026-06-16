import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["platejs", "@platejs/basic-nodes", "@platejs/link", "@platejs/list"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
