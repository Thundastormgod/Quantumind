/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable server-side rendering for static export
  output: 'export',
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Images configuration for static export
  images: {
    unoptimized: true,
  },
  
  // Enable static HTML export
  trailingSlash: true,
  
  // Disable TypeScript type checking during build (speeds up build)
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
}

// For Netlify deployment
const isProd = process.env.NODE_ENV === 'production'
if (isProd) {
  // Add any production-specific config here
  nextConfig.output = 'export'
}

export default nextConfig