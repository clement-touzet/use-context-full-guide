import Product from "./product";
import useProducts from "../../hooks/useProducts";

const ProductsList = () => {
  const products = useProducts();

  return (
    <div>
      <h2>Liste des produits</h2>
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductsList;
