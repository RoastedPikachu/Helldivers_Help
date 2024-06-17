/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

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
    swcMinify: true,
};

const withpwa = withPWA({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true, 
});

export default withpwa(nextConfig);
