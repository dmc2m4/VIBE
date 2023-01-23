import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import createDetail from "../../redux/actions/createDetail";
import { cleanDetail } from "../../redux/actions/cleanDetail";
import style from './DetailCard.module.css'
import heart from '../../assets/heart.png'
import car from '../../assets/car.png'

const DetailCard = () => {
  const detail = useSelector((state) => state.Detail);
  const { id } = useParams();
  const dispatch = useDispatch();
  const array = [1, 2, 3, 4 ,5]
  
  useEffect(() => {
    dispatch(createDetail(id));
    return function (){
      dispatch(cleanDetail())
    }
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      <div >
      <Link to='/home'>
        <img src="https://cdn-icons-png.flaticon.com/512/507/507257.png" alt="back" className={style.icon} />
      </Link>
      </div>
       <div className={style.containerIcon}>
      <img src={heart} alt="favorites" className={style.icon}/>
      
      </div>
      <div className={style.containerTitle}>
      <h1 className={style.title}>{detail.name}</h1>
      </div>
      <div className={style.containerProduct}>
        <div className={style.containerImg}>
      <img src={detail.img} alt='Image product' className={style.productImg} />
     </div>
     <div className={style.containerDetail}>
      <div className={style.containerText}>
      <p className={style.rating}> <p className={style.textDetail}>Price: </p> {detail.cost} $</p>
      <p className={style.rating}> <p className={style.textDetail}>Size: </p> {detail.size}</p>
      <p className={style.rating}> <p className={style.textDetail}>Color:</p> {detail.color}</p>
      <p className={style.rating}> <p className={style.textDetail}>Category: </p>{detail.category}</p>
      <p className={style.rating}> <p className={style.textDetail}>Gender:</p> {detail.gender}</p>
      <div >
      <p className={style.rating}> <p className={style.textDetail}>Rating: </p> {array.slice(0, detail.rating ).map(e => (
       <div className={style.rating}><p>⭐</p></div>
      ))} </p>
     </div>
      <p className={style.rating}> <p className={style.textDetail}>Season: </p> {detail.season}</p>
      <p className={style.rating}> <p className={style.textDetail}>Stock: </p> {detail.stock}</p>
      </div>
    <div className={style.containerButtonAdd}>
      <button className={style.buttonAdd}>ADD TO CAR</button>
      </div>
      </div>
      </div>
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
        asperiores illum ea rerum rem non quia, dolor hic dolorem nemo aut
        deserunt odio enim dicta amet iusto vero. Aliquam, laudantium.
      </p> */}
      {/* <textarea name="comments" id="comments" cols="100" rows="10"></textarea>
      <button>Add comment</button> */}
    </div>
  );
};

export default DetailCard;
