import React from "react";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form>
        <label>Username:</label>
        <input type="text" id="username" name="username" />
        <label>Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <NavLink to="/signup">
        <span>Crear Cuenta</span>
      </NavLink>
      <p>
        Vincula cuanta con <span>Google</span>
      </p>
=======
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
>>>>>>> b4f3b69329c07f8d5037cae7c6f9ef13779a786c
    </div>
  );
};

export default Login;
