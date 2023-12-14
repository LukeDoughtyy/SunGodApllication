import { RootStore } from "./root.store";

import { observable, action, makeObservable } from "mobx";
import { ProductData } from "../interfaces/productData.interface";
import { ChildStore } from "./child.store";

export class ProductDataStore extends ChildStore {
  productData?: ProductData;

  constructor(rootStore: RootStore) {
    super(rootStore);

    makeObservable(this, {
      productData: observable,
      init: action,
    });

    this.init();
  }

  /**
   * Data Setters
   */

  async init(): Promise<void> {
    this.loadProductData();
  }

  async fetchProductData(): Promise<ProductData> {
    return await fetch(
      "https://www.sungod.co/products/9150/renegades?pdp=1"
    ).then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json() as Promise<ProductData>;
    });
  }

  loadProductData = async () => {
    const productResponse = await this.fetchProductData();
    this.productData = productResponse;
  };
}
