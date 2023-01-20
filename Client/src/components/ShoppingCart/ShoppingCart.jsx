import React from "react";
import { useReducer } from "react";
import rootReducer from "../../redux/reducer";
import ProductItem from "./ProductItem";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const initialState = state
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const { Products, Cart } = state;
  const addToCart = () => {}
  const delFromCart = () => {}
  const clearCart = () => {}

  return (
    <div>
      <h2>Shopping cart</h2>
      <h3>Products</h3>
      <article className="box">
        {Products.map((product) => <ProductItem key={product.id} data={product} addToCart={addToCart}/>)}
      </article>
      <h3>Cart</h3>
    </div>
  );
};

export default ShoppingCart;
