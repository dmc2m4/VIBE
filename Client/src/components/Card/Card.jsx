import React from 'react'
import s from "./Card.module.css"
const Card = () => {
  console.log('hola')
  return (
    <div className={s.container}>
      <img src="" alt="" />
      <h3>Campera Cuero Negra</h3>
      <p>$10.000</p>
      <p>Campera</p>
    </div>
  )
}

export default Card
