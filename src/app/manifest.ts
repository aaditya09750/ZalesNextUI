import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zales — You Deserve the Most Unique Jewelry",
    short_name: "Zales",
    description:
      "Explore luxury diamond rings, necklaces, earrings, and bracelets crafted with precision and elegance by expert designers.",
    start_url: "/",
    display: "standalone",
    background_color: "#16110d",
    theme_color: "#16110d",
    orientation: "portrait-primary",
    categories: ["shopping", "lifestyle"],
    icons: [
      {
        src: "/icon?size=192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon?size=512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
