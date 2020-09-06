import React, { useState } from "react";
import fakeData from "../../fakeData";
import "./Shope.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const firstTen = fakeData.slice(0, 10);
  const [product, setProducts] = useState(firstTen);
  const [cart, setCart] = useState([]);

  const handlerAddProduct = (prod) => {
    const newCart = [...cart, prod];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((pd) => (
          <Product products={pd} clickHandler={handlerAddProduct}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
