const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/' : '',
  basePath: isProd ? '/' : '',
  output: 'export'
};

export default nextConfig;
