import React from "react";
import style from "./CategoriesLink.module.css"
import womenVibe from "../../assets/womenVibe.png"
import mochilaVibe from "../../assets/bolsoVibe.png"
import menVibe from "../../assets/menVibe.png"
import shoesVibe from "../../assets/shoesVibe.png"
import { useDispatch, useSelector } from "react-redux";

const CategoriesLink = () => {
  const dispatch = useDispatch
  const filters = useSelector((state) => state.Filters);

  function handleChange(e) {
    const newFilters = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    dispatch(updateFilters(newFilters));
    dispatch(cleanPage());
  }

  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>MEN</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit quis, suscipit, odio provident unde porro nam laborum voluptates modi quisquam.</p>
            <button name="gender" id="male" onChange={handleChange}>Buy now</button>
          </div>
          <img src={menVibe}/>
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>WOMEN</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit quis, suscipit, odio provident unde porro nam laborum voluptates modi quisquam.</p>
            <button href="#">Buy now</button>
          </div>
          <img src={womenVibe}/>
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>SHOES</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit quis, suscipit, odio provident unde porro nam laborum voluptates modi quisquam.</p>
            <button href="#">Buy now</button>
          </div>
          <img src={shoesVibe}/>
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>ACCESORIES</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit quis, suscipit, odio provident unde porro nam laborum voluptates modi quisquam.</p>
            <button href="#">Buy now</button>
          </div>
          <img src={mochilaVibe}/>
        </div>

      </div>
    </>
  );
};

export default CategoriesLink