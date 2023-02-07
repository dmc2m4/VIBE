import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addOneToCart,
  clearCart,
  removeFromCart,
} from "../../redux/actions/shoppingCart";
import { PurchaseForm } from "../PurchaseForm/PurchaseForm";
import style from  "./ShoppingCart.module.css";


const ShoppingCart = () => {
  const { items, total } = useSelector((state) => state.Cart);
  sessionStorage.setItem('cart', itmes)
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <h2>Shopping cart</h2>
      <h3>Products</h3>
      <article className="">
        {items?.map((i) => (
          <div key={i.id}>
            <img src={i.img} className='product_img' />
            <span className='product_name'>{i.name}</span>
            <span className='product_price'>Price: ${i.cost}</span>
            <button onClick={() => dispatch(addOneToCart(i))}>+</button>
            <span className='product_quantity'>{i.quantity}</span>
            <button onClick={() => dispatch(removeFromCart(i))}>-</button>
          </div>
        ))}
      </article>
      <h1>Total: {total} USD</h1>
      <button onClick={() => dispatch(clearCart())}>Clear</button>
      <div>
        <PurchaseForm />
      </div>
    </div>
  );
};

export default ShoppingCart;
