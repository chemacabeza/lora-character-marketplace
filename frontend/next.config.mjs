/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.civitai.com",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
