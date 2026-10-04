import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/static/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/static/"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/static/"],
      },
    ],
    sitemap: "https://zales-luxury.vercel.app/sitemap.xml",
  };
}
