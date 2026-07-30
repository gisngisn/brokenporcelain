import { NextResponse } from "next/server";

export async function GET() {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="10" fill="#050505"/>
    <circle
        cx="32"
        cy="32"
        r="18"
        fill="none"
        stroke="#ffffff"
        stroke-width="2.2"
    />
    <path
        d="M24 18 L31 30 L27 46"
        stroke="#ffffff"
        stroke-width="1.5"
        fill="none"
        opacity=".65"
    />
    <path
        d="M36 16 L34 32 L42 46"
        stroke="#ffffff"
        stroke-width="1.5"
        fill="none"
        opacity=".65"
    />
</svg>`;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}