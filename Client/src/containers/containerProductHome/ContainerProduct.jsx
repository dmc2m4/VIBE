import React from 'react'
import Filters from '../../components/Filters/Filters'
import Products from '../../components/Products/Products'
import style from './ContainerProduct.module.css'

const ContainerProduct = () => {
  return (
    <div className={style.container}>
       
        <Products/>
    </div>
  )
}

export default ContainerProduct