import React from "react";
import "../styles/product.css";

function Product(props) {
  return (
    <div className="product" onClick={() => props.onClickHandler()}>
      <h1>{props.data.name}</h1>
      <p>Rp. {props.data.price}</p>
    </div>
  );
}

export default Product;
