import { IProduct, IProductAction } from "./reducer";

export const productActions = {
  add(product: IProduct): IProductAction {
    return {
      type: "ADD",
      payload: product,
    };
  },
};
