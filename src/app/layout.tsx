import "@/app/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Zales — You Deserve the Most Unique Jewelry",
  description:
    "Our young and expert designers design the most exquisite jewelry for you to shine in a special way in the world.",
  keywords: ["jewelry", "diamonds", "rings", "necklaces", "earrings", "zales", "luxury"],
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
