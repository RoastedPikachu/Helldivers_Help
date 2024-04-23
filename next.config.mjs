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
};

export default nextConfig;
