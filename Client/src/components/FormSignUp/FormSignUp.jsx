import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import createUser from "../../redux/actions/createUser";
import style from "./FormSingUp.module.css";

const FormSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [newUser, setNewUser] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  function handleChange(e) {
    setError(
      validate({
        ...newUser,
        [e.target.name]: e.target.value,
      })
    );
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  }

  function validate(input) {
    const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
    if (!regExpEmail.test(input.email)) error.email = "The email is invalid";
    if (!input.name) error.name = "enter a username";
    if (input.password !== input.confirmPassword)
      error.password = "Passwords don't match";
    return error;
  }

  function handleSubmit() {
    if (
      !newUser.name ||
      !newUser.password ||
      !newUser.email ||
      !newUser.confirmPassword
    ) {
      alert("Incomplete data");
    } else {
      dispatch(createUser(newUser));
      console.log(newUser);
      alert("user created successfully");
      navigate("/products");
    }
  }

  return (
    <div className={style.containerPrimary}>
      <h2 className={style.titleSignup}>Register</h2>
      <form onSubmit={handleSubmit} className={style.formSignup}>
        <label className={style.labelSignup}>Username:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your username"
          onChange={handleChange}
          className={style.inputSignup}
        />
        <label className={style.labelSignup}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your mail"
          onChange={handleChange}
          className={style.inputSignup}
        />
        <label className={style.labelSignup}>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          className={style.inputSignup}
        />
        <label className={style.labelSignup}>Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password"
          onChange={handleChange}
          className={style.inputSignup}
        />
        {/* <label>Accept the terms and conditions</label>
        <input type='checkbox' id='accptterms' name='acceptterms' value='si' /> */}
        <button type="submit" className={style.buttonSignup}>
          Create Acount
        </button>
      </form>
    </div>
  );
};

export default FormSignUp;
