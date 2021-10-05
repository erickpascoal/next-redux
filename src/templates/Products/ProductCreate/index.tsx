import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../../store/product/actions";
import { IProduct } from "../../../store/product/reducer";

const INITIAL_FORM_VALUE = {
  name: "",
  description: "",
  price: 0,
};

export function ProductCreate() {
  const dispatch = useDispatch();
  const products: IProduct[] = useSelector((state: any) => state.product);

  const [product, setProduct] = useState(INITIAL_FORM_VALUE);

  function changeProduct(property: string, value) {
    setProduct((prev) => ({ ...prev, [property]: value }));
  }

  function submit(formEvent: FormEvent) {
    formEvent.preventDefault();

    const { name, description, price } = product;

    const newProduct: IProduct = {
      id: new Date().toDateString(),
      name,
      description,
      price,
    };

    dispatch(productActions.add(newProduct));

    setProduct(INITIAL_FORM_VALUE);
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Nome"
        value={product.name}
        onChange={(event) => changeProduct("name", event.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={product.description}
        onChange={(event) => changeProduct("description", event.target.value)}
      />
      <input
        type="text"
        placeholder="Preço"
        value={product.price}
        onChange={(event) => changeProduct("price", event.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
