import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import heart from "../../assets/heart.png";
import { useDispatch, useSelector } from "react-redux";
import setFavorites from "../../redux/actions/setFavorites";
import deleteFavorites from "../../redux/actions/deleteFavorites";
import redHeart from "../../assets/corazon.png";
import SwiperCard from "../SwiperCard/SwiperCard";
import getFavorites from "../../redux/actions/getFavorites";

const Card = (props) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.Favorites);
  const user = useSelector(state => state.User)

  const searchingFav = favorites.filter(f => f.id === props.id)

  function favBotton() {
    dispatch(setFavorites(props))
      .then(res => {
        dispatch(getFavorites(user.email));
      })
  }

  function deleteFav() {
    dispatch(deleteFavorites(props))
      .then(res => {
        dispatch(getFavorites(user.email));
      })
  }

  function setImages() {
    const images = props.img.split(",");
    return images.map((element, i) => {
      return <img src={element} alt="images" key={i} className={style.img} />;
    });
  }

  return (
    <div className={style.container} >
      {user.isAdmin?<button
        onClick={() => props.deleteProduct(props.id)}
        className={style.delete}>X</button>: null}
      <Link to={`/productDetail/${props.id}`}
        className={style.link}>
        <div className={style.img} >
        <SwiperCard props={props.img} />
        </div>
       
      </Link>
      <h3 className={style.title}>{props.name}</h3>
      <div className={style.containerDescription}>
        <div>
          <p className={style.text}>{props.cost} USD</p>
          <p className={style.text}>{props.category}</p>
        </div>
        <div>
          <div className={style.containerImg}>
            {!searchingFav.length ? (
              <img
                onClick={favBotton}
                src={heart}
                alt=""
                className={style.car}
              />
            ) : (
              <img
                onClick={deleteFav}
                src={redHeart}
                alt=""
                className={style.car}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
