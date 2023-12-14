export interface ImageData {
  sceneName: string;
  nakedEyeImage: Image;
  sceneImages: SceneImage;
}

export interface Image {
  id: number;
  responsiveImage: ResponsiveImage;
  focalPoint: { x: number; y: number };
}

type Base64 = `data:image/jpeg;base64${string}`;

export interface ResponsiveImage {
  srcSet: string;
  webpSrcSet: string;
  sizes: string;
  src: string;
  width: number;
  height: number;
  aspectRatio: number;
  alt?: string | undefined;
  title: string | undefined;
  bgColor: string;
  base64: Base64;
}

export interface SceneImage {
  rgle_8blue: Lens;
  rgle_8brown: Lens;
  rgle_8chrome: Lens;
  rgle_8fire: Lens;
  rgle_8gold: Lens;
  rgle_8green: Lens;
  rgle_8pink: Lens;
  rgle_8purple: Lens;
  rgle_8red: Lens;
  rgle_8rose: Lens;
  rgle_8silverblue: Lens;
  rgle_8smoke: Lens;
  rgle_8Pblue: Lens;
  rgle_8Pbrown: Lens;
  rgle_8Pchrome: Lens;
  rgle_8Pfire: Lens;
  rgle_8Pgold: Lens;
  rgle_8Pgreen: Lens;
  rgle_8Ppink: Lens;
  rgle_8Ppurple: Lens;
  rgle_8Pred: Lens;
  rgle_8Prose: Lens;
  rgle_8Psilverblue: Lens;
  rgle_8Psmoke: Lens;
  rgle_Nblue: Lens;
  rgle_Nbrown: Lens;
  rgle_Nchrome: Lens;
  rgle_Nfire: Lens;
  rgle_Ngold: Lens;
  rgle_Ngreen: Lens;
  rgle_Npink: Lens;
  rgle_Npurple: Lens;
  rgle_Nred: Lens;
  rgle_Nrose: Lens;
  rgle_Nsilverblue: Lens;
  rgle_Nsmoke: Lens;
  rgle_Pblue: Lens;
  rgle_Pbrown: Lens;
  rgle_Pchrome: Lens;
  rgle_Pfire: Lens;
  rgle_Pgold: Lens;
  rgle_Pgreen: Lens;
  rgle_Ppink: Lens;
  rgle_Ppurple: Lens;
  rgle_Pred: Lens;
  rgle_Prose: Lens;
  rgle_Psilverblue: Lens;
  rgle_Psmoke: Lens;
}

export interface Lens {
  lensType: string;
  lensColor: string;
  image: Image;
  secondaryImage?: Image | undefined;
}
