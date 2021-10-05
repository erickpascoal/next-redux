import { useDispatch } from "react-redux";
import { calculatorActions } from "../../../store/calculator/actions";
import { Form, FormData } from "../Form";

export function Sum() {
  const dispatch = useDispatch();

  function sum(formData: FormData) {
    dispatch(calculatorActions.sum(formData.num1, formData.num2));
  }

  return (
    <div>
      <Form submit={sum} buttonText="Somar" />
    </div>
  );
}
