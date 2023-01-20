import React from 'react'
import styles from "./Card.module.css"


const Card = (props) => {
  return (
    <div className={styles.container} >
      <img src={props.img} alt="" className={styles.img}/>
      <h3>{props.name}</h3>
      <p>Talla: {props.size}</p>
      <p>Cost: {props.cost} USD</p>
      <p>Category: {props.category}</p>
      <p>Color: {props.color}</p>
      <p>Gender: {props.gender}</p>
      <p>Season: {props.season}</p>
      <p>Stock {props.stock}</p>
      <p>Rating: {props.rating} ⭐</p>
      <button  onClick={()=> props.deleteProduct(props.id)}>Delete</button>
    </div>
  )
}

export default Card
