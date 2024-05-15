import { PropsWithChildren } from "react";
import ProductsProvider from "./products-provider";

const Providers = ({ children }: PropsWithChildren) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};

export default Providers;
