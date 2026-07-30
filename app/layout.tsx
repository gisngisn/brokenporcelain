import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Broken Porcelain",
  description:
    "A digital museum of fragile porcelain memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-[#050505]"
    >
      <body
        className="
          min-h-screen
          overflow-x-hidden
          bg-[#050505]
          text-white
          antialiased
        "
      >
        {children}
      </body>
    </html>
  );
}