import { combineReducers, createStore } from "redux";
import { calculatorReducer } from "./calculator/reducer";
import { productReducer } from "./product/reducer";

export const rootReduces = combineReducers({
  calculator: calculatorReducer,
  product: productReducer,
});

export const store = createStore(rootReduces);
