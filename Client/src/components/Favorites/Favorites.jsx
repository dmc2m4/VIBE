import React from "react";
import {useSelector } from "react-redux";
import Card from "../Card/Card"
import style from './Favorites.module.css'


const Favorites = () => {
  const favorites = useSelector(state => state.Favorites);
  const user = sessionStorage.getItem("userEmail")


  return (
    <div className={style.container}>
      {favorites?.map((product) => (
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
          ))}
    </div>
  )
};

export default Favorites;
