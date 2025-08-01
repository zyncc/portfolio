import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    typedEnv: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "*",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
