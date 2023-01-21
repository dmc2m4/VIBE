import React from 'react'
import ContainerSignUp from '../../containers/containerSignUp/containerSignUp'
import style from './Register.module.css'

const Register = () => {
  return (
    <div className={style.containerPrimary}>
      <section className={style.containerForm}>
        <ContainerSignUp/>
      </section>
    </div>
  )
}

export default Register