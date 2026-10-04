import { ImageResponse } from "next/og";

export const alt = "Zales Luxury Diamond Jewelry — Elegance Redefined";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #16110d 0%, #1e1712 40%, #292019 100%)",
          position: "relative",
        }}
      >
        {/* Subtle decorative accent line */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, transparent, #c9a184, transparent)",
          }}
        />

        {/* Brand monogram */}
        <span
          style={{
            fontSize: "80px",
            fontWeight: 700,
            color: "#c9a184",
            fontFamily: "Georgia, serif",
            letterSpacing: "12px",
            marginBottom: "8px",
          }}
        >
          ZALES
        </span>

        {/* Separator line */}
        <div
          style={{
            width: "120px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #c9a184, transparent)",
            margin: "16px 0",
          }}
        />

        {/* Tagline */}
        <span
          style={{
            fontSize: "22px",
            fontWeight: 400,
            color: "#8f7e70",
            fontFamily: "Georgia, serif",
            letterSpacing: "6px",
            textTransform: "uppercase",
          }}
        >
          Luxury Diamond Jewelry
        </span>

        {/* Subtitle */}
        <span
          style={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#5a4e44",
            fontFamily: "Georgia, serif",
            marginTop: "24px",
            letterSpacing: "2px",
          }}
        >
          You Deserve the Most Unique Jewelry
        </span>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, transparent, #c9a184, transparent)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
