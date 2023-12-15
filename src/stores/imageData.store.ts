import { RootStore } from "./root.store";

import { observable, action, makeObservable } from "mobx";
import {
  ImageData,
  Image,
  Lens,
  SceneImage,
} from "../interfaces/imageData.interface";
import { ChildStore } from "./child.store";

/**
 *
 * Store for holding image data returned from image API
 *
 * Holds observables of what images are being currently viewed
 *
 * Has getters and setters for manipulating which images to show and which are available
 */

export class ImageDataStore extends ChildStore {
  imageData?: ImageData[];
  selectedImage?: ImageData;
  selectedNakedEyeImage?: Image;
  selectedLensImage?: Image;
  selectedLens?: Lens;

  constructor(rootStore: RootStore) {
    super(rootStore);

    makeObservable(this, {
      imageData: observable,
      selectedImage: observable,
      selectedNakedEyeImage: observable,
      selectedLensImage: observable,
      selectedLens: observable,
      init: action,
    });

    this.init();
  }

  /**
   * Data Setters
   */

  async init(): Promise<void> {
    this.loadImageData();
  }

  /**
   * Fetch image data from API and transform into ImageData interface type
   */
  async fetchImageData(): Promise<ImageData[]> {
    return await fetch(
      "https://gist.githubusercontent.com/robwatkiss/09f2461e02d372747dad5fe56ff2251f/raw/b942d9ba21e10889a6cfce639c1a12f6bb2bfa0e/Senior%2520Frontend%2520Developer%2520Task%2520-%2520Sample%2520Lens%2520Guide%2520Data.json"
    ).then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json() as Promise<ImageData[]>;
    });
  }

  loadImageData = async () => {
    const imageResponse = await this.fetchImageData();
    this.imageData = imageResponse;
    this.selectedImage = imageResponse[0];
    this.selectedNakedEyeImage = imageResponse[0].nakedEyeImage;
    this.selectedLensImage = imageResponse[0].sceneImages.rgle_8Pblue.image;
    this.selectedLens = imageResponse[0].sceneImages.rgle_8Pblue;
  };

  /**
   * Data Handlers
   */

  /**
   * Takes in ImageData to set as new image.
   *
   * Sets observable selectedImage and respective selectedNakedEyeImage.
   *
   * Sets selectedLensImage back to default.
   */
  setSelectedNakedEyeImage = (imageToSet: ImageData) => {
    this.selectedNakedEyeImage = imageToSet.nakedEyeImage;
    this.selectedLensImage = imageToSet.sceneImages.rgle_8Pblue.image;
    this.selectedImage = imageToSet;
  };

  /**
   * Takes in string of lens image name to set.
   *
   * Sets observables selectedLensImage and selectedLens.
   *
   */
  setSelectedLensImage = (imageToSet: string) => {
    if (this.selectedImage) {
      const arrayOfLensImageNames = [];
      for (const lensImageName in this.selectedImage.sceneImages) {
        arrayOfLensImageNames.push(lensImageName);
      }
      this.selectedLensImage = this.selectedImage.sceneImages[imageToSet].image;
      this.selectedLens = this.selectedImage.sceneImages[imageToSet];
    }
  };

  /**
   *
   * Return selectedNakedEyeImage as Image.
   *
   */
  getSelectedNakedEyeImage = (): Image | undefined => {
    return this.selectedNakedEyeImage;
  };

  /**
   *
   * Return selectedLensImage as Image.
   *
   */

  getSelectedLensImage = (): Image | undefined => {
    return this.selectedLensImage;
  };

  /**
   *
   * Return all Naked Eye Images as Image[].
   *
   */
  getAllNakedEyeImages = (): Image[] | undefined => {
    if (this.imageData) {
      const imageArray: Image[] = [];
      this.imageData.forEach((image) => {
        imageArray.push(image.nakedEyeImage);
      });
      return imageArray;
    }
    return undefined;
  };

  /**
   *
   * Return lens images for current selectedImage as SceneImage.
   *
   */
  getLensImagesForCurrentNaked = (): SceneImage | undefined => {
    if (this.selectedImage) {
      return this.selectedImage.sceneImages;
    }
    return undefined;
  };
}
