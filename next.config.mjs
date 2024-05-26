/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        domains: [
            "helldivers.help",
            "helldivers-help.vercel.app",
        ]
    },
    trailingSlash: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
