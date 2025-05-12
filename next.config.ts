import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // required if you're using next/image
  },
  basePath: "/portfolio", 
  assetPrefix: '/portfolio/', // Ensure assets are prefixed correctly

};

export default nextConfig;
