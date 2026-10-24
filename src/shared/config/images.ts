import manifest from './images.json';

export type ImageKey = keyof typeof manifest.images;

export type SiteImage = {
  src: string;
  width: number;
  height: number;
};

export const images = manifest.images as Record<ImageKey, SiteImage & { origin: string }>;

export const getImage = (key: ImageKey): SiteImage => {
  const { src, width, height } = images[key];
  return { src, width, height };
};
