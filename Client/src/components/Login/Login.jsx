import React from "react";
import style from './Login.module.css'

const Login = () => {
  return (
    <div className={style.containerLogin}>
      <h3 className={style.titleForm}>Log in</h3>
      <form className={style.containerForm}>
        <label className={style.labelForm}>Email</label>
        <input type='text' id='username' name='username'  className={style.inputLogin} placeholder="example@gmail.com"/>
        <label className={style.labelForm}>Password</label>
        <input type='password' id='password' name='password' className={style.inputLogin} placeholder="Enter your Password" />
        <button type='submit' className={style.buttonLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
