import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'; 

const nextConfig: NextConfig = {
   basePath: isProd ? '/gallery' : '', assetPrefix: isProd ? '/gallery/' : 
   '', images: { unoptimized: true},
};

export default nextConfig;
