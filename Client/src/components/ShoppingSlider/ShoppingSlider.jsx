import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import car from "../../assets/car.png";
import style from './ShoppingSlider.module.css'
import SwiperCard from '../SwiperCard/SwiperCard'
import "animate.css"

const ShoppingSlider = () => {
  const [cart, setCart] = useState(false);
  const cart2 = localStorage.getItem("globalCart");
  const items = cart2? JSON.parse(cart2).items : []
  const total = cart2? JSON.parse(cart2).total : []
  return (
    <div
      className={style.cartContainer}
      onClick={() => {
        setCart(!cart);
      }}
    >
      <img src={car} alt="cary" className={style.shopping_img} />
      {cart ? (
       
        <div className={style.cart_list}>
        <h2 className={style.titleCart}>My shopping Cart</h2>
          {items.length ? (
            items.map((e, i) => {
              
              return (
                <Link to={`/productDetail/${e.id}`} className={style.link}>
                <div className={style.product}>
                  <div className={style.product_img}>
                  <SwiperCard props={e.img} />
                  </div>
                  <div className={style.name}>
                  <p>{e.name}</p>
                </div>
                <div className={style.cost}>
                  <label>Price</label>
                  <p>{e.cost}$</p>
                </div>
                <div className={style.containerCat}>
                  <label>Cant.</label>
                  <span className={style.product_quantity}>{e.quantity}</span>
                </div>
                </div>
                </Link>
              );
            })
          ) : (
            <div className={style.empty}><p>Empty</p></div>
          )}
          <div className={style.containerTotal}> <p className={style.price}>TOTAL:</p><p className={style.price}>{total} $</p></div>
        <Link to="/shopping-cart" className={style.containerButton}>
            <button className={style.buttonCar}>GO TO CART</button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default ShoppingSlider;
