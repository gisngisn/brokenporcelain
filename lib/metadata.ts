import type { Metadata, Viewport } from "next";
import { SITE } from "./constants";

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },

  description: SITE.description,

  applicationName: SITE.name,

  generator: "Next.js",

  authors: [
    {
      name: SITE.author,
    },
  ],

  creator: SITE.author,

  publisher: SITE.author,

  keywords: [
    "Broken Porcelain",
    "Digital Museum",
    "Porcelain Doll",
    "Dark Art",
    "Fine Art",
    "Gallery",
    "Photography",
    "Contemporary Art",
    "Broken Doll",
    "Museum",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: SITE.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/twitter-image"],
  },

  icons: {
    icon: "/icon",
    apple: "/icon",
    shortcut: "/icon",
  },

  manifest: "/site.webmanifest",

  category: "art",
};