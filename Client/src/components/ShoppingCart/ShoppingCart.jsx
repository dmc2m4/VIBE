import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addOneToCart,
  clearCart,
  removeFromCart,
} from "../../redux/actions/shoppingCart";
import { PurchaseForm } from "../PurchaseForm/PurchaseForm";
import SwiperCard from '../SwiperCard/SwiperCard'
import style from  "./ShoppingCart.module.css";
import trash from '../../assets/papelera-de-reciclaje.png'



const ShoppingCart = () => {
  const cart = localStorage.getItem("globalCart");
  const items = JSON.parse(cart).items
  const total = JSON.parse(cart).total
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
    <div className={style.containerProduct}>
      <h1 className={style.title}>Shopping cart</h1>
      <h2>Products</h2>
      <article className="article">
        {items?.map((i) => (
          <div className={style.column}>
          <div key={i.id} className={style.containerPr}>
          <div className={style.swiperCard}>
            <SwiperCard props={i.img} />
            </div>
            <span className={style.productName}>{i.name}</span>
            <span className={style.productPrice}>${i.cost * i.quantity}</span>
            <button onClick={() => dispatch(removeFromCart(i))} className={style.quantity}>-</button>
            <span className={style.textQuantity}>{i.quantity}</span>
            <button onClick={() => dispatch(addOneToCart(i))} className={style.quantity}>+</button>
            </div>
            <div className={style.linear}></div>
          </div>
        ))}
      </article>
      <div className={style.containerTotal}>
      <button onClick={() => dispatch(clearCart())} className={style.containerButton}><img src={trash} alt='trash' className={style.iconTrash}/></button>
      <h1>Total: {total} USD</h1>
      </div>
      </div>
      <div>
        <PurchaseForm />
      </div>
    </div>
  );
};

export default ShoppingCart;
