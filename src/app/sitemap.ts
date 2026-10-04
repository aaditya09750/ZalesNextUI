import type { MetadataRoute } from "next";

const BASE_URL = "https://zales-luxury.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-10-04"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/#shapes`,
      lastModified: new Date("2026-10-04"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#collections`,
      lastModified: new Date("2026-10-04"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#crafts`,
      lastModified: new Date("2026-10-04"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/#try-on`,
      lastModified: new Date("2026-10-04"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/#reviews`,
      lastModified: new Date("2026-10-04"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
