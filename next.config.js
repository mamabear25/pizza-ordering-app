/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
      { key: "Access-Control-Allow-Credentials", value: "true" },
      { key: "Access-Control-Allow-Origin", value: "*" },
      { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
      { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
      { key: "Access-Max-Age", value: "86400"}
        ]
      }
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ["res.cloudinary.com", "s.gravatar.com", "lh3.googleusercontent.com", "https://pizza-ordering-8f1q08h0h-mamabear25.vercel.app"],
  }
};

module.exports = nextConfig