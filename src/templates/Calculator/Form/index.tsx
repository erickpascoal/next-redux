import { FormEvent, useState } from "react";

export interface FormData {
  num1: number;
  num2: number;
}

interface FormProps {
  buttonText: string;
  submit: (value: FormData) => void;
}

export function Form({ buttonText, submit }: FormProps) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function handleSubmit(formEvent: FormEvent) {
    formEvent.preventDefault();

    submit({ num1, num2 });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Numero 1"
        value={num1}
        onChange={(event) => setNum1(Number(event.target.value))}
      />
      <input
        type="number"
        placeholder="Numero 2"
        value={num2}
        onChange={(event) => setNum2(Number(event.target.value))}
      />

      <button>{buttonText}</button>
    </form>
  );
}
