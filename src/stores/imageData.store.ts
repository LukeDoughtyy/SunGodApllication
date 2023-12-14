import { RootStore } from "./root.store";

import { observable, action, makeObservable } from "mobx";
import { ImageData } from "../interfaces/imageData.interface";
import { ChildStore } from "./child.store";

export class ImageDataStore extends ChildStore {
  imageData?: ImageData;

  constructor(rootStore: RootStore) {
    super(rootStore);

    makeObservable(this, {
      imageData: observable,
      init: action,
    });

    this.init();
  }

  /**
   * Setters
   */

  async init(): Promise<void> {
    this.imageData = await this.fetchImageData();
  }

  async fetchImageData(): Promise<ImageData> {
    return fetch(
      "https://gist.githubusercontent.com/robwatkiss/09f2461e02d372747dad5fe56ff2251f/raw/b942d9ba21e10889a6cfce639c1a12f6bb2bfa0e/Senior%2520Frontend%2520Developer%2520Task%2520-%2520Sample%2520Lens%2520Guide%2520Data.json"
    ).then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json() as Promise<Response>;
    });
  }

  /**
   * Utils
   */
}
