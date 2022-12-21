/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ["res.cloudinary.com", "s.gravatar.com", "lh3.googleusercontent.com"],
  },
}

module.exports = nextConfig