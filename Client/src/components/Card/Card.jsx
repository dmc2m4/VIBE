import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import heart from "../../assets/heart.png";
import { useState, /* useEffect */ } from "react";
import { useDispatch } from "react-redux";
import setFavorites from "../../redux/actions/setFavorites";
import deleteFavorites from "../../redux/actions/deleteFavorites";
import redHeart from "../../assets/corazon.png";
/* import axios from "axios";
 */

const Card = (props) => {
  const [fav, setFav] = useState(1);
  const dispatch = useDispatch();
/*   const [images, setImages] = useState([]);
 */  
 /*  useEffect(() => {
    const id = props.id
    axios
      .get(`http://localhost:3001/product/${id}`)
      .then((response) => {
        setImages(response.data.images);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
 */
  function favButton() {
    if (fav === 1) {
      setFav(2);
      dispatch(setFavorites(props));
    } else {
      setFav(1);
      console.log(props);
      dispatch(deleteFavorites(props));
    }
  }

  return (
    <div className={style.container}>
      <button
        onClick={() => props.deleteProduct(props.id)}
        className={style.delete}
      >
        X
      </button>
      <Link to={`/productDetail/${props.id}`} className={style.link}>
        {" "}
        {props.img.map((img, index) => (
          <img key={index} src={img} alt="" className={style.img} />
        ))}
      </Link>
      <h3 className={style.title}>{props.name}</h3>
      <div className={style.containerDescription}>
        <div>
          <p className={style.text}>{props.cost} USD</p>
          <p className={style.text}>{props.category}</p>
        </div>
        <div>
          <div className={style.containerImg}>
            {fav === 1 ? (
              <img
                onClick={favButton}
                src={heart}
                alt=""
                className={style.car}
              />
            ) : (
              <img
                onClick={favButton}
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
