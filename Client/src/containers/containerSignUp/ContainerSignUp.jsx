import React from 'react'
import FormSignUp from '../../components/FormSignUp/FormSignUp'
import style from './ContainerSignUp.module.css'
import iconVibe from '../../assets/iconVibe.png'


const ContainerSignUp = () => {
  return (
     <div className={style.container}>
        <div className={style.containerIcon}>
         <img src={iconVibe} alt="iconVibe" className={style.iconVibe} />           
        <p>TOP FASHION</p>
        </div>
        <div className={style.containerForm}>
            <FormSignUp/>
        </div>
    </div>
  )
}

export default ContainerSignUp