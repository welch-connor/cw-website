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
};

export default nextConfig;
