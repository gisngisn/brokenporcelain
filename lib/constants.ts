export const SITE = {
  name: "Broken Porcelain",

  title: "Broken Porcelain",

  description: "A Digital Museum of Fragile Memories",

  author: "Broken Porcelain",

  url: "https://brokenporcelain.art",

  locale: "en",

  themeColor: "#050505",
} as const;

export const MUSEUM = {
  artworkHeight: "72vh",

  transitionDuration: 0.8,

  floatingDuration: 8,

  spotlightIntensity: 0.12,

  wheelThrottle: 700,
} as const;

export const GALLERY = {
  imageDirectory: "/gallery",

  json: "/gallery.json",
} as const;

export const ANIMATION = {
  ease: [0.22, 1, 0.36, 1] as const,

  fadeDuration: 0.8,

  blur: "12px",

  floatDistance: 10,
} as const;

export const BREAKPOINT = {
  mobile: 640,

  tablet: 768,

  desktop: 1024,

  wide: 1440,
} as const;