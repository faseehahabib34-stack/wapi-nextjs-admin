/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Image uploads in the admin are sent through a Server Action (default limit is only 1 MB).
    serverActions: { bodySizeLimit: "4mb" },
  },
};

export default nextConfig;
