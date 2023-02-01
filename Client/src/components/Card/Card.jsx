import { React } from 'react';
import { Link } from 'react-router-dom';
import style from "./Card.module.css";
import heart from '../../assets/heart.png';
import { useDispatch, useSelector } from 'react-redux';
import setFavorites from '../../redux/actions/setFavorites';
import deleteFavorites from '../../redux/actions/deleteFavorites';
import redHeart from "../../assets/corazon.png";
import getPage from '../../redux/actions/getPage';
import { useState, useEffect } from 'react';
import updateFilters from '../../redux/actions/updateFilters';


const Card = (props) => {
  const dispatch = useDispatch();
  const page = useSelector(state => state.Page);
  const [fav, setFav] = useState(props.isfav);
  const filters = useSelector(state => state.Filters)

  useEffect(()=>{
    // dispatch(updateFilters(filters))
    dispatch(getPage(page, filters));
  },[dispatch, fav])

  function prueba (prevData){
    setFav(prevData => {
      return !prevData
    })
  }

  function favBotton() {
    prueba(fav)
    dispatch(setFavorites(props));
  }

  function deleteFav() {
    prueba(fav)
    dispatch(deleteFavorites(props));
    //  dispatch(getPage(page, filters));
  }

  return (
    <div className={style.container} >
      <button onClick={() => props.deleteProduct(props.id)} className={style.delete}>X</button>
      <Link to={`/productDetail/${props.id}`} className={style.link}> <img src={props.img} alt="" className={style.img} /></Link>
      <h3 className={style.title}>{props.name}</h3>
      <div className={style.containerDescription}>
        <div>
          <p className={style.text}>{props.cost} USD</p>
          <p className={style.text}>{props.category}</p>
        </div>
        <div>
          <div className={style.containerImg}>
            {props.isfav == "2"? <img onClick={favBotton} src={heart} alt="" className={style.car} /> :
              <img onClick={deleteFav} src={redHeart} alt="" className={style.car} />}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Card
