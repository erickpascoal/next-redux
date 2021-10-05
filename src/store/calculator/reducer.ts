const INITIAL_STATE = 0;

export interface ICalculatorAction {
  type: "SUM" | "SUBTRACT";
  payload: {
    num1: number;
    num2: number;
  };
}

export function calculatorReducer(
  state: number = INITIAL_STATE,
  action: ICalculatorAction
) {
  switch (action.type) {
    case "SUM": {
      const { num1, num2 } = action.payload;
      return num1 + num2;
    }

    case "SUBTRACT": {
      const { num1, num2 } = action.payload;
      return num1 - num2;
    }

    default:
      return state;
  }
}
