import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sen. Wakili Hillary Sigei: Bomet",
    short_name: "Sigei",
    description: "Mtoto wa Bomet. Kazi Iendelee.",
    start_url: "/en",
    display: "standalone",
    background_color: "#faf7f0",
    theme_color: "#0b3d2e",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
