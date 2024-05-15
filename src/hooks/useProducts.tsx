import { useContext } from "react";
import { ProductsContext } from "../ProductsContext";

const useProducts = () => {
  const products = useContext(ProductsContext);

  if (!products)
    throw new Error("You must you this hook in a ProductsContext Provider");

  return products;
};

export default useProducts;
