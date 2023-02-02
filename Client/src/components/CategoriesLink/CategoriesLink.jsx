import React from "react";
import style from "./CategoriesLink.module.css"
import buzoVibe from "../../assets/buzoVibe.png"
import mochilaVibe from "../../assets/mochilaVibe.png"

const CategoriesLink = () => {
  return (
    <>
      <body>
        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>HOODIES</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit quis, suscipit, odio provident unde porro nam laborum voluptates modi quisquam.</p>
            <a href="#">Buy now</a>
          </div>
          <img src={buzoVibe}/>
        </div>

        <div className={style.card2}>
          <div className={style.circle2}></div>
          <div className={style.content2}>
            <h2>ACCESORIES</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit quis, suscipit, odio provident unde porro nam laborum voluptates modi quisquam.</p>
            <a href="#">Buy now</a>
          </div>
          <img src={mochilaVibe}/>
        </div>

      </body>
    </>
  );
};

export default CategoriesLink