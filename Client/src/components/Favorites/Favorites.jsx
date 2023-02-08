import React from "react";
import {useSelector } from "react-redux";
import style from './Favorites.module.css'
import { Link } from "react-router-dom";
import SwiperCard from "../SwiperCard/SwiperCard";
import eyes from '../../assets/ojo.png'
import car from '../../assets/carrito-de-compras.png'
const Favorites = () => {
  const favorites = useSelector(state => state.Favorites);
  const user = sessionStorage.getItem("userEmail")

  return (
    <div className={style.container}>
    <div className={style.containerTable}>
        <section className={style.table}>
        <div className={style.containerTitle}>
        <h3>Favorites</h3>
        </div>
       {favorites?.map((product) => (
        <div className={style.link}>
          <div className={style.product}>
                  <div className={style.product_img}>
                  <SwiperCard props={product.img} />
                  </div>
                  <div className={style.name}>
                  <p>{product.name}</p>
                </div>
                <div>
                <Link to={`/productDetail/${product.id}`} >
                <div className={style.containerIconFavorite}>
                  <img src={eyes} className={style.iconFavorite}/>
                  </div>
                  </Link>
                  <div  className={style.containerIconFavorite}>
                  <img src={car} className={style.iconFavorite}/>
                  </div>
                </div>
                </div>
                
            
               
                </div>
       ))}
        </section>
    </div>


      
      {/*favorites?.map((product) => (
        <div className={style.card}>
            <Card
              name={product.name}
              img={product.img}
              size={product.size}
              cost={product.cost}
              category={product.category}
              color={product.color}
              gender={product.gender}
              season={product.season}
              stock={product.stock}
              rating={product.rating}
              id={product.id}
              key={product.id}
              email={user}
            />
            </div>
          ))*/}
    </div>
  )
};

export default Favorites;
