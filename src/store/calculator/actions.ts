import { ICalculatorAction } from "./reducer";

export const calculatorActions = {
  sum(num1: number, num2: number): ICalculatorAction {
    return {
      type: "SUM",
      payload: {
        num1,
        num2,
      },
    };
  },

  subtract(num1: number, num2: number): ICalculatorAction {
    return {
      type: "SUBTRACT",
      payload: {
        num1,
        num2,
      },
    };
  },
};
