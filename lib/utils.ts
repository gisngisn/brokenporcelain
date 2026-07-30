import { ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function clamp(
  value: number,
  min: number,
  max: number
) {
  return Math.min(Math.max(value, min), max);
}

export function lerp(
  start: number,
  end: number,
  amount: number
) {
  return start + (end - start) * amount;
}

export function padNumber(
  value: number,
  digits = 2
) {
  return value.toString().padStart(digits, "0");
}

export function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function preloadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = reject;

    image.src = src;
  });
}

export async function preloadImages(
  images: string[]
) {
  await Promise.all(images.map(preloadImage));
}

export function isBrowser() {
  return typeof window !== "undefined";
}

export function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function randomInt(
  min: number,
  max: number
) {
  return Math.floor(random(min, max + 1));
}

export function formatEdition(
  current: number,
  total: number
) {
  return `${current}/${total}`;
}