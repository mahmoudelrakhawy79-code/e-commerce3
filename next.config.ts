import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  // basePath: 'e-commerce3',
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/*/**',
      },
    ],
  },
};

export default nextConfig;
