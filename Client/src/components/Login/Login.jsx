import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginUser from "../../redux/actions/userLogin";
import style from "./Login.module.css";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function validations(input) {
    const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
    if (!regExpEmail.test(input.email)) error.email = "The email is invalid";
    return error
  }

  function handleChange(e) {
    setError(
      validations({
        ...login,
        [e.target.name]: e.target.value,
      })
    );
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit() {
    if (
      !login.email ||
      !login.password
    ) {
      alert("Incomplete data");
    } else {
      dispatch(loginUser(login));
      navigate("/home");
    }
  }

  return (
    <div className={style.containerLogin}>
      <h3 className={style.titleForm}>Log in</h3>
      <form className={style.containerForm} onSubmit={handleSubmit}>
        <label className={style.labelForm}>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          className={style.inputLogin}
          placeholder="example@gmail.com"
          onChange={handleChange}
        />
        <label className={style.labelForm}>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className={style.inputLogin}
          placeholder="Enter your Password"
          onChange={handleChange}
        />
        <button type="submit" className={style.buttonLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
