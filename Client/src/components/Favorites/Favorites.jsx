import React from "react";
import "./Favorites.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import getFavorites from "../../redux/actions/getFavorites";
import Card from "../Card/Card"


const Favorites = () => {
  const favorites = useSelector(state => state.Favorites);
  const user = useSelector(state => state.User)
  console.log(favorites);


  return (
    <div>
      {favorites.data?.map((product) => (
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
              email={user? user.email: null}
            />
          ))}
    </div>
  )
};

export default Favorites;
