import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['res.cloudinary.com','images.unsplash.com', 'cdn.pixabay.com', 'images.pexels.com'],
  },
};

export default nextConfig;
