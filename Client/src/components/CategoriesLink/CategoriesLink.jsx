import React, { useEffect, useState } from "react";
import style from "./CategoriesLink.module.css";
import womenVibe from "../../assets/womenVibe.png";
import mochilaVibe from "../../assets/bolsoVibe.png";
import menVibe from "../../assets/menVibe.png";
import shoesVibe from "../../assets/shoesVibe.png";
import { useDispatch, useSelector } from "react-redux";
import cleanPage from "../../redux/actions/cleanPage";
import updateFilters from "../../redux/actions/updateFilters";

const CategoriesLink = () => {
  const dispatch = useDispatch();
  const [newFilters, setNewFilters] = useState({});
  const [active, setActive] = useState({});
  function handleClick(e) {
    setNewFilters({
      [e.target.name]: e.target.value,
    });
    setActive(e.target.value);
    dispatch(updateFilters(newFilters));
    dispatch(cleanPage());
  }
  return (
    <>
      <div className={style.mainDiv}>
        <div
          className={style.card}
          style={
            active === "male" ? { backgroundColor: "rgb(25, 110, 86)" } : null
          }
        >
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>MEN</h2>

            <button
              name="gender"
              value="male"
              onClick={handleClick}
              className={style.buyBtn}
            >
              Buy now
            </button>
          </div>
          <img src={menVibe} />
        </div>

        <div
          className={style.card}
          style={
            active === "female" ? { background: "rgb(25, 110, 86)" } : null
          }
        >
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>WOMEN</h2>

            <button
              name="gender"
              value="female"
              onClick={handleClick}
              className={style.buyBtn}
            >
              Buy now
            </button>
          </div>
          <img src={womenVibe} />
        </div>

        <div
          className={style.card}
          style={
            active === "shoes" ? { backgroundColor: "rgb(25, 110, 86)" } : null
          }
        >
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>SHOES</h2>

            <button
              name="category"
              value="shoes"
              onClick={handleClick}
              className={style.buyBtn}
            >
              Buy now
            </button>
          </div>
          <img src={shoesVibe} />
        </div>

        <div
          className={style.card}
          style={
            active === "accesories"
              ? { backgroundColor: "rgb(25, 110, 86)" }
              : null
          }
        >
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>ACCESORIES</h2>

            <button
              name="category"
              value="accesories"
              onClick={handleClick}
              className={style.buyBtn}
            >
              Buy now
            </button>
          </div>
          <img src={mochilaVibe} />
        </div>
      </div>
    </>
  );
};

export default CategoriesLink;
