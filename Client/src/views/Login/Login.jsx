import React from 'react'
import ContainerForn from '../../containers/containerForm/ContainerForn'
import style from './Login.module.css'

const Login = () => {
  return (
    <div className={style.containerPrimary}>
      <section className={style.containerForm}>
        <ContainerForn/>
      </section>
    </div>
  )
}

export default Login