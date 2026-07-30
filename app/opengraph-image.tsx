import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Broken Porcelain";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
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
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(255,255,255,.08), transparent 65%)",
          }}
        />

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
              width: 120,
              height: 120,
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
              fontSize: 56,
            }}
          >
            ○
          </div>

          <div
            style={{
              fontSize: 72,
              letterSpacing: 16,
              fontWeight: 600,
            }}
          >
            BROKEN
          </div>

          <div
            style={{
              marginTop: 26,
              fontSize: 24,
              letterSpacing: 8,
              opacity: 0.65,
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