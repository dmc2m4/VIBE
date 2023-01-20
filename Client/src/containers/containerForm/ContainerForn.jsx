import React from 'react'
import Login from '../../components/Login/Login'
import style from './ContainerForm.module.css'
import iconVibe from '../../assets/iconVibe.png'

const ContainerForn = () => {
  return (
    <div className={style.container}>
        <div className={style.containerIcon}>
         <img src={iconVibe} alt="iconVibe" className={style.iconVibe} />           
        <p>TOP FASHION</p>
        </div>
        <div className={style.containerForm}>
            <Login/>
        </div>
    </div>
  )
}

export default ContainerForn