import { ProductType } from "../../App";

type Props = {
  product: ProductType;
};

const Product = ({ product }: Props) => {
  return (
    <div>
      <p>
        {product.description} : {product.price}€
      </p>
    </div>
  );
};

export default Product;
