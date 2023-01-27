import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import car from "../../assets/car.png";
import "./ShoppingSlider.css";

const ShoppingSlider = () => {
  const [cart, setCart] = useState(false);
  const product = useSelector((state) => state.Cart);
  return (
    <div
      className="cart_content"
      onClick={() => {
        setCart(!cart);
      }}
    >
      <img src={car} alt="cary" className="shopping_img" />
      {cart ? (
        <div className="cart_list">
          {product.items.length ? (
            product.items.map((e, i) => {
              return (
                <div>
                  <img
                    className="product_img"
                    key={i}
                    src={e.img}
                    alt={e.name}
                  />
                  <span className="product_quantity">{e.quantity}</span>
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
