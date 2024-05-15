import { ProductType } from "../App";
import useProducts from "../hooks/useProducts";

const ShoppingCart = ({ cart }: { cart: ProductType["id"][] }) => {
  const products = useProducts();

  return (
    <div>
      <h2>Mon panier</h2>
      <ul>
        {cart.map((cartItemId) => {
          const product = products.find((product) => product.id === cartItemId);
          return (
            <li key={cartItemId}>
              <p>
                {product?.description}, {product?.price}€
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingCart;
