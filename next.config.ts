import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.gompass.com", // or localhost
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
