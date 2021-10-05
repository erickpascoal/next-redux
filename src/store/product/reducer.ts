const INITIAL_STATE: IProduct[] = [
  {
    id: new Date().toISOString(),
    name: "camisa",
    description: "uma camisa ",
    price: 333,
  },
];

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface IProductAction {
  type: "ADD" | "DELETE";
  payload: IProduct;
}

export function productReducer(state = INITIAL_STATE, action: IProductAction) {
  switch (action.type) {
    case "ADD":
      {
        return [...state, action.payload];
      }
      break;

    default:
      return state;
  }
}
