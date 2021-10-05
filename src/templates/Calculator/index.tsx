import { Result } from "./Result";
import { Subtract } from "./Subtract";
import { Sum } from "./Sum";

export function CalculatorTemplate() {
  return (
    <>
      <Sum />
      <Subtract />
      <Result />
    </>
  );
}
