import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #16110d 0%, #292019 100%)",
        borderRadius: "14px",
      }}
    >
      <span
        style={{
          fontSize: "36px",
          fontWeight: 700,
          color: "#c9a184",
          letterSpacing: "-1px",
          fontFamily: "Georgia, serif",
        }}
      >
        Z
      </span>
    </div>,
    { ...size },
  );
}
