import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "54.252.163.190", // or localhost
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
