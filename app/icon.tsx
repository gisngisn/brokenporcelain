import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
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
          position: "relative",
        }}
      >
        <div
          style={{
            width: 360,
            height: 360,
            borderRadius: "50%",
            border: "5px solid rgba(255,255,255,.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
          >
            <circle
              cx="150"
              cy="150"
              r="118"
              stroke="white"
              strokeWidth="2"
              opacity="0.25"
            />

            <path
              d="M118 46
                 L150 126
                 L132 248"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.75"
            />

            <path
              d="M180 58
                 L164 144
                 L208 248"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.75"
            />

            <path
              d="M90 120
                 L176 152"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.45"
            />

            <path
              d="M112 208
                 L188 174"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.35"
            />
          </svg>
        </div>
      </div>
    ),
    size
  );
}