import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import car from "../../assets/car.png";
import style from './ShoppingSlider.module.css'

const ShoppingSlider = () => {
  const [cart, setCart] = useState(false);
  const product = useSelector((state) => state.Cart);
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
          {product.items.length ? (
            product.items.map((e, i) => {
              console.log
              return (
                <div className={style.product}>
                  <img
                    className={style.product_img}
                    key={i}
                    src={e.img}
                    alt={e.name}
                  />
                  <div className={style.name}>
                  <p>{e.name}</p>
                </div>
                <div>
                  <label>Price</label>
                  <p></p>
                </div>
                <div className={style.containerCat}>
                  <label>Cant.</label>
                  <span className={style.product_quantity}>{e.quantity}</span>
                </div>
                </div>
              );
            })
          ) : (
            <div className={style.empty}><p>Empty</p></div>
          )}
          <div className={style.containerTotal}> <p className={style.price}>TOTAL:</p><p className={style.price}>{product.total} $</p></div>
        <Link to="/shopping-cart" className={style.containerButton}>
            <button className={style.buttonCar}>GO TO CART</button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default ShoppingSlider;
