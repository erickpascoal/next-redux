import { ProductCreate } from "./ProductCreate";
import { ProductList } from "./ProductList";

export function ProductsTemplate() {
  return (
    <div>
      <ProductCreate />
      <ProductList />
    </div>
  );
}
