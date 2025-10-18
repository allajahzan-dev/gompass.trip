import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https", 
        hostname: "api.gompass.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
