import { createContext } from "react";
import { ProductType } from "../App";

export const ProductsContext = createContext<ProductType[]>([]);
