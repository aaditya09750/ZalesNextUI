import "@/app/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/atoms";

const BASE_URL = "https://zales-luxury.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Zales — You Deserve the Most Unique Jewelry",
    template: "%s | Zales Luxury Jewelry",
  },
  description:
    "Our young and expert designers design the most exquisite jewelry for you to shine in a special way in the world. Explore luxury diamond rings, necklaces, earrings, and bracelets crafted with precision and elegance.",
  keywords: [
    "jewelry",
    "diamonds",
    "rings",
    "necklaces",
    "earrings",
    "zales",
    "luxury",
    "diamond rings",
    "engagement rings",
    "fine jewelry",
    "luxury jewelry",
    "bracelets",
    "wedding rings",
  ],
  authors: [{ name: "Aaditya Gunjal", url: "https://www.linkedin.com/in/aadityagunjal0975/" }],
  creator: "Aaditya Gunjal",
  publisher: "Zales Luxury Jewelry",
  category: "e-commerce",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Zales Luxury Jewelry",
    title: "Zales — You Deserve the Most Unique Jewelry",
    description:
      "Explore luxury diamond rings, necklaces, earrings, and bracelets crafted with precision and elegance by expert designers.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zales Luxury Diamond Jewelry — Elegance Redefined",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zales — You Deserve the Most Unique Jewelry",
    description:
      "Explore luxury diamond rings, necklaces, earrings, and bracelets crafted with precision and elegance.",
    images: ["/twitter-image"],
    creator: "@zaborin",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#16110d",
    "color-scheme": "dark",
    "msapplication-TileColor": "#16110d",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
