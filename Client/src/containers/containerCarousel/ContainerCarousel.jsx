import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import style from './ContainerCarousel.module.css'

const ContainerCarousel = () => {
  return (
    <div className={style.container}><Carousel/></div>
  )
}

export default ContainerCarousel