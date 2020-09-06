import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, stock } = props.products;

  return (
    <div className="single-product">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <br />
        <p>${price}</p>
        <br />
        <p>
          <small>Only {stock} left in stock- order soon</small>
        </p>
        <button
          onClick={() => props.clickHandler(props.products)}
          className="add-button"
        >
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
