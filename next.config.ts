import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'live.staticflickr.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Optimize for performance
  poweredByHeader: false,
};

export default nextConfig;
