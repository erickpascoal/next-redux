import { useDispatch } from "react-redux";
import { calculatorActions } from "../../../store/calculator/actions";
import { Form, FormData } from "../Form";

export function Subtract() {
  const dispatch = useDispatch();

  function subtract(formData: FormData) {
    dispatch(calculatorActions.subtract(formData.num1, formData.num2));
  }

  return (
    <div>
      <Form submit={subtract} buttonText="Subtrair" />
    </div>
  );
}
