/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aev35wmkefkcua83.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
