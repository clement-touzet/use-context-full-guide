import { createContext, useState } from "react";
import "./App.css";
import Products from "./components/products/products-list";
import ShoppingCart from "./components/shopping-cart";
import Navbar from "./components/navbar";
import Providers from "./providers/providers";

export type ProductType = {
  id: string;
  description: string;
  price: number;
};

function App() {
  const [cart, setCart] = useState(["shooes"]);

  return (
    <div>
      <Providers>
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "20px",
          }}
        >
          <Products />
          <ShoppingCart cart={cart} />
        </div>
      </Providers>
    </div>
  );
}

export default App;

//
//
//
//
//
//
//
//
//
//
//
//
// 1 faire de base tout dans le fichier :

// ...
// 2 mettre dans des fichiers différents: provider, context
// 3 montrer le fichier Providers
// 4 custom hooks
