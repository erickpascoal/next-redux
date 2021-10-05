import { useSelector } from "react-redux";
import { IProduct } from "../../../store/product/reducer";

export function ProductList() {
  const products: IProduct[] = useSelector((state: any) => state.product);

  return (
    <>
      <table>
        <thead>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
