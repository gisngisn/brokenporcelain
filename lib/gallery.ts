export type Artwork = {
  id: number;
  image: string;
  title: string;
  description: string;
  year?: string;
  medium?: string;
  series?: string;
  edition?: string;
  size?: string;
};

export async function getGallery(): Promise<Artwork[]> {
  const res = await fetch("/gallery.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load gallery.");
  }

  return res.json();
}

export function getArtwork(
  artworks: Artwork[],
  index: number
): Artwork | null {
  if (index < 0 || index >= artworks.length) {
    return null;
  }

  return artworks[index];
}

export function nextArtworkIndex(
  current: number,
  total: number
): number {
  return Math.min(current + 1, total - 1);
}

export function previousArtworkIndex(
  current: number
): number {
  return Math.max(current - 1, 0);
}

export function hasNextArtwork(
  current: number,
  total: number
): boolean {
  return current < total - 1;
}

export function hasPreviousArtwork(
  current: number
): boolean {
  return current > 0;
}