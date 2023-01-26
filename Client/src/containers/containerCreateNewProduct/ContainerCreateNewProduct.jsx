import React from 'react'
import FormNewProduct from '../../components/FormNewProduct/FormNewProduct'
import style from './ContainerCreateNewProduct.module.css'

const ContainerCreateNewProduct = () => {
  return (
    <div className={style.container}>
        <section>
        </section>
        <section>
        <FormNewProduct/>
        </section>
    </div>
  )
}

export default ContainerCreateNewProduct