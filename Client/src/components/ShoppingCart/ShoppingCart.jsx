import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addOneToCart,
  clearCart,
  removeFromCart,
} from "../../redux/actions/shoppingCart.actions";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { items, total } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping cart</h2>
      <h3>Products</h3>
      <article className="box">
        {items?.map((i) => (
          <div key={i.id}>
            <h1>
              {i.name} ${i.price} Quantity: ({i.quantity})
            </h1>
            <button onClick={() => dispatch(addOneToCart(i))}>+</button>
            <button onClick={() => dispatch(removeFromCart(i))}>-</button>
          </div>
        ))}
      </article>
      <h1>Total: {total} USD</h1>
      <button onClick={() => dispatch(clearCart())}>Clear</button>
    </div>
  );
};

export default ShoppingCart;
