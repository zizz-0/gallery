import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix:'/gallery/',
  basePath: '',
  output: 'export'
};

export default nextConfig;
