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
      {
        source: "/",
        has: [{ type: "cookie", key: "NEXT_LOCALE", value: "sw" }],
        destination: "/sw",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "NEXT_LOCALE", value: "en" }],
        destination: "/en",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "header", key: "accept-language", value: "^sw.*" }],
        destination: "/sw",
        permanent: false,
      },
      { source: "/", destination: "/en", permanent: false },
      // Renamed pages: old URLs keep working (308).
      {
        source: "/:locale(en|sw)/second-term",
        destination: "/:locale/kazi-iendelee",
        permanent: true,
      },
      { source: "/second-term", destination: "/en/kazi-iendelee", permanent: true },
      { source: "/:locale(en|sw)/about", destination: "/:locale/story", permanent: true },
      { source: "/about", destination: "/en/story", permanent: true },
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
