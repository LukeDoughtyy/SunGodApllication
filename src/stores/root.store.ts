import { ImageDataStore } from "./imageData.store"; // image store and image data
import { ProductDataStore } from "./productData.store";

export class RootStore {
  private static instance: RootStore;

  public imageDataStore: ImageDataStore;
  public productDataStore: ProductDataStore;

  constructor() {
    this.imageDataStore = new ImageDataStore(this);
    this.productDataStore = new ProductDataStore(this);

    this.imageDataStore.init();
    this.productDataStore.init();
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
