import React from "react";
import { useReducer } from "react";
import {
  shoppingCartInitialState,
  shoppingCartReducer,
} from "../../redux/reducer/shoppingCart.reducer";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(
    shoppingCartReducer,
    shoppingCartInitialState
  );
  const { products, cart } = state;
  return (
    <div>
      <h2>Shopping cart</h2>
      <h3>Products</h3>
      <article className="box"></article>
      <h3>Cart</h3>
    </div>
  );
};

export default ShoppingCart;
