import { ImageDataStore } from "./imageData.store"; // image store and image data

export class RootStore {
  private static instance: RootStore;

  public imageDataStore: ImageDataStore;

  constructor() {
    this.imageDataStore = new ImageDataStore(this);
  }

  static async instantiate() {
    if (RootStore.instance) {
      return RootStore.instance;
    }

    const rootStore = new RootStore();

    // singleton instance
    RootStore.instance = rootStore;
    return rootStore;
  }
}
