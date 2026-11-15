import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 828, 1080, 1440, 1920, 2400],
  },
  poweredByHeader: false,
  // Root "/" → locale, done at the platform level so it works even if the proxy is skipped.
  // Order matters: saved cookie first, then browser language, then English.
  async redirects() {
    return [
      { source: "/", has: [{ type: "cookie", key: "NEXT_LOCALE", value: "sw" }], destination: "/sw", permanent: false },
      { source: "/", has: [{ type: "cookie", key: "NEXT_LOCALE", value: "en" }], destination: "/en", permanent: false },
      { source: "/", has: [{ type: "header", key: "accept-language", value: "^sw.*" }], destination: "/sw", permanent: false },
      { source: "/", destination: "/en", permanent: false },
    ];
  },
  // Tailwind v4 through Turbopack (as set up by create-next-app).
  turbopack: {
    rules: {
      "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
    },
  },
};

export default withNextIntl(nextConfig);
