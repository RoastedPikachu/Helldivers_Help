/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["helldivers.help", "helldivers-help.vercel.app"],
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

const withPWAConfig = withpwa(nextConfig);
const withPWAAndIntlConfig = withNextIntl(withPWAConfig);

export default withPWAAndIntlConfig;
