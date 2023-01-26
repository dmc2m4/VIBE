import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Card.module.css"
import heart from '../../assets/heart.png'


const Card = (props) => {
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
        <img src={heart} alt="" className={style.car} />
        </div>
      </div>
     </div>
     
    </div>
  )
}

export default Card
