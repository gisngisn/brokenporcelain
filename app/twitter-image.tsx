import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Broken Porcelain";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          color: "#ffffff",
          position: "relative",
          overflow: "hidden",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 65%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 220,
            height: 220,
            border: "2px solid rgba(255,255,255,0.75)",
            borderRadius: "50%",
            opacity: 0.9,
          }}
        />

        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          style={{
            position: "absolute",
            opacity: 0.35,
          }}
        >
          <path
            d="M110 28 L102 108 L75 190"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M145 42 L122 112 L150 184"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M74 84 L138 112"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              marginTop: 180,
              fontSize: 70,
              letterSpacing: 16,
              fontWeight: 600,
            }}
          >
            BROKEN PORCELAIN
          </div>

          <div
            style={{
              marginTop: 26,
              fontSize: 24,
              letterSpacing: 8,
              opacity: 0.7,
              textTransform: "uppercase",
            }}
          >
            A Digital Museum of Fragile Memories
          </div>
        </div>
      </div>
    ),
    size
  );
}