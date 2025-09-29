import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      // Add your production Strapi domain when deployed
      // {
      //   protocol: 'https',
      //   hostname: 'your-strapi-app.herokuapp.com',
      //   pathname: '/uploads/**',
      // },
    ],
  },
};

export default nextConfig;
