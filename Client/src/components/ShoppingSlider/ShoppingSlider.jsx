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
          {product.items.length ? (
            product.items.map((e, i) => {
              return (
                <div>
                  <img
                    className={style.product_img}
                    key={i}
                    src={e.img}
                    alt={e.name}
                  />
                  <span className={style.product_quantity}>{e.quantity}</span>
                </div>
              );
            })
          ) : (
            <div>"empty"</div>
          )}
          <div>{product.total} $</div>
          <Link to="/shopping-cart">
            <button>GO TO CART</button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default ShoppingSlider;
