import type { NextConfig } from "next";


const nextConfig = {
  output:'export',
  trailingSlash: true, // Ensures `/support` maps to `/support/index.html`
  images: {
    // domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
}

module.exports = nextConfig
export default nextConfig;
