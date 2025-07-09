// Simple image loader that returns the same path for all images
// This is used when `unoptimized: true` is set in next.config.js
module.exports = function customImageLoader({ src }) {
  return src
}
