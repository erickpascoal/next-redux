import { useSelector } from "react-redux";

export function Result() {
  const { calculator } = useSelector((state: any) => state);

  return <div>Resultado: {calculator}</div>;
}
