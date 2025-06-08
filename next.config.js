const nextConfig = {
  output: 'export', // Enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static exports
    domains: ['images.unsplash.com'],
  },
  trailingSlash: true,
  typescript: {
    // Enable type checking during build
    ignoreBuildErrors: false,
  },
  // Ensure React is in scope for JSX
  compiler: {
    reactRemoveProperties: false,
  },
  // Required for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;
