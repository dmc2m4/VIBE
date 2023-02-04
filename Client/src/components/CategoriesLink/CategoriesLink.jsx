import React, { useEffect, useState } from "react";
import style from "./CategoriesLink.module.css"
import womenVibe from "../../assets/womenVibe.png"
import mochilaVibe from "../../assets/bolsoVibe.png"
import menVibe from "../../assets/menVibe.png"
import shoesVibe from "../../assets/shoesVibe.png"
import { useDispatch, useSelector } from "react-redux";
import cleanPage from "../../redux/actions/cleanPage";
import updateFilters from "../../redux/actions/updateFilters";

const CategoriesLink = () => {
  const dispatch = useDispatch();
  const [newFilters, setNewFilters] = useState({})  

  function handleChange(e) {
    setNewFilters({
      [e.target.name]: e.target.value,
    });
  }
 
  useEffect(() => {
    dispatch(updateFilters(newFilters));
    dispatch(cleanPage());
  },[newFilters])

  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>MEN</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit quis, suscipit, odio provident unde porro nam laborum voluptates modi quisquam.</p>
            <button name="gender" value="male" onClick={handleChange}>Buy now</button>
          </div>
          <img src={menVibe}/>
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>WOMEN</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit quis, suscipit, odio provident unde porro nam laborum voluptates modi quisquam.</p>
            <button name="gender" value="female" onClick={handleChange}>Buy now</button>
          </div>
          <img src={womenVibe}/>
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>SHOES</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit quis, suscipit, odio provident unde porro nam laborum voluptates modi quisquam.</p>
            <button name="category" value="shoes" onClick={handleChange}>Buy now</button>
          </div>
          <img src={shoesVibe}/>
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>ACCESORIES</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit quis, suscipit, odio provident unde porro nam laborum voluptates modi quisquam.</p>
            <button name="category" value="accesories" onClick={handleChange}>Buy now</button>
          </div>
          <img src={mochilaVibe}/>
        </div>

      </div>
    </>
  );
};

export default CategoriesLink