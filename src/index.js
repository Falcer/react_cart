import React from "react";
import { render } from "react-dom";

import Product from "./component/Product";
import Cart from "./component/Cart";

import "./styles/app.css";

const PRODUCTS = [
  {
    id: 1,
    name: "Indomie",
    price: 3000,
  },
  {
    id: 2,
    name: "PrimoGem",
    price: 100000,
  },
  {
    id: 3,
    name: "Steam Wallet",
    price: 50000,
  },
];

function App() {
  const [cart, setCart] = React.useState([]);
  const onAddProductItem = (product) => {
    if (cart.map((item) => item.id).includes(product.id)) {
      // inc total_item
      const tmp = cart.map((item) => {
        // = = compare value, = = = compare value + tipe data
        // "1" = = 1 => true
        // "1" = = = 1 => false
        if (item.id === product.id) {
          item.total_item += 1;
        }
        return item;
      });
      setCart(tmp);
    } else {
      setCart([...cart, { ...product, total_item: 1 }]);
    }
  };

  const qtyHandler = (id, type) => {
    const tmp = cart.map((item) => {
      if (item.id === id) {
        if (type === "INC") {
          item.total_item += 1;
        } else {
          item.total_item -= 1;
        }
      }
      return item;
    });
    setCart(tmp.filter((item) => item.total_item > 0));
  };

  return (
    <div className="app">
      <div className="products">
        {PRODUCTS.map((product, idx) => (
          <Product
            key={idx}
            data={product}
            onClickHandler={() => onAddProductItem(product)}
          />
        ))}
      </div>
      <Cart
        data={cart}
        onIncrementQty={(id) => qtyHandler(id, "INC")}
        onDecrementQty={(id) => qtyHandler(id, "DEC")}
      />
    </div>
  );
}

render(<App />, document.querySelector("#root"));
