import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Card.module.css";
import heart from '../../assets/heart.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import setFavorites from '../../redux/actions/setFavorites';
import deleteFavorites from '../../redux/actions/deleteFavorites';
import redHeart from "../../assets/corazon.png"

const Card = (props) => {
  const [fav, setFav] = useState(1);
  const dispatch = useDispatch();

  // console.log(props);

  function favBotton (){
    if (fav === 1){
      setFav(2);
      dispatch(setFavorites(props));
    }else{
      setFav(1);
      console.log(props);
      dispatch(deleteFavorites(props));
    }
  }

  return (
    <div className={style.container} >
      <button  onClick={()=> props.deleteProduct(props.id)} className={style.delete}>X</button>
    <Link to={`/productDetail/${props.id}`} className={style.link}> <img src={props.img} alt="" className={style.img}/></Link> 
      <h3 className={style.title}>{props.name}</h3>
      <div className={style.containerDescription}>
        <div>
      <p className={style.text}>{props.cost} USD</p>
      <p className={style.text}>{props.category}</p>
      </div>
      <div>
        <div className={style.containerImg}>
          {fav === 1 ?<img onClick={favBotton} src={heart} alt="" className={style.car} />: 
          <img onClick={favBotton} src={redHeart} alt="" className={style.car} />}
        
        </div>
      </div>
     </div>
     
    </div>
  )
}

export default Card
