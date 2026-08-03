import type { Metadata } from "next";
import "./globals.css";
import "./entrance.css";
import "./hero-rework.css";

export const metadata: Metadata = {
  title: "BROKEN DOLL — 破碎娃娃",
  description: "破碎娃娃 · 油画艺术展",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
