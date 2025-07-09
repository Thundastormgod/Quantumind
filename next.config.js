/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Images configuration for static export
  images: {
    unoptimized: true,
  },
}
