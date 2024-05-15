import { PropsWithChildren, useState } from "react";
import { ProductsContext } from "../ProductsContext";

const availableProducts = [
  {
    id: "shooes",
    description: "sport shooes",
    price: 130,
  },
  {
    id: "t-shirt",
    description: "coton t-shirt",
    price: 35,
  },
  {
    id: "glasses",
    description: "cool looking glasses",
    price: 53,
  },
];

const ProductsProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState(availableProducts);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
