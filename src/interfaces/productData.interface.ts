export interface ProductData {
  renegades: Renegades;
}

export interface Renegades {
  id: string;
  sku: string;
  name: string;
  subTitle: string;
  baseProduct: null;
  productInfoTitle: string;
  productInfoText: string;
  hasPdp: boolean;
  url: string;
  icon: string;
  sizeAndFit: string;
  inTheBoxItems: InTheBoxItem[];
  techSpecs: ProductTechSpec[];
  lensPreviewScenes: LensPreviewScenes[];
  lensPreviewConditions: string[];
  enableVirtualTryOn: boolean;
}

export interface LensPreviewScenes {
  name: string;
  icon: string;
}

export interface ProductTechSpec {
  id: string;
  label: string;
  icon: string;
  value: string;
  lensTechFilter: string;
  __typename: string;
}

export interface InTheBoxItem {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
    __typename: string;
  };
  __typename: string;
}