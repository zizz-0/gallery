import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'; 

const nextConfig: NextConfig = {
   reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/gallery/' : '',
  basePath: isProd ? '/gallery' : '',
  output: 'export'
};

export default nextConfig;
