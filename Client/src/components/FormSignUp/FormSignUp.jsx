import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import createUser from "../../redux/actions/createUser";
=======
import createUser from "../../redux/actions/createUser.action";
import style from './FormSingUp.module.css'
>>>>>>> 5413fb6b06cb525fa9847915796b3b2482af9aa2
=======
=======
import { useNavigate } from "react-router-dom";
>>>>>>> 9fb371b4643620b2116a1d7b47808e77f4b9dbe0
import createUser from "../../redux/actions/createUser";
import style from './FormSingUp.module.css'
>>>>>>> cbb4d1834418de493230df0649f7173fd17b1a86

const FormSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
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
    if (!regExpEmail.test(input.email)) error.email = "El email es inválido";
    if (!input.name) error.name = "Introduzca un nombre de usuario";
    if (input.password !== input.confirmPassword) error.password = "Las contraseñas no coinciden";
    return error;
  }

  function handleSubmit() {
    if (!newUser.name || !newUser.password || !newUser.email || newUser.confirmPassword) {
      alert('datos incompletos')
    }else {
    dispatch(createUser(newUser));
    console.log(newUser);
    alert("usuario creado correctamente");
    navigate("/products")
    }
  }

  return (
    <div className={style.containerPrimary}>
      <h2 className={style.titleSignup}>Register</h2>
<<<<<<< HEAD
      <form onSubmit={(e) => handleSubmit} className={style.formSignup(e)}>
=======
      <form onSubmit={handleSubmit} className={style.formSignup}>
>>>>>>> cbb4d1834418de493230df0649f7173fd17b1a86
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
<<<<<<< HEAD
<<<<<<< HEAD
        <button type="submit">Create Acount</button>
        {/* {error ? (
          <div>
            {error.forEach((e) => {
              return <div>{e}</div>;
            })}
          </div>
        ) : null} */}
=======
        <button type='submit' className={style.buttonSignup}>Create Acount</button> 
>>>>>>> 5413fb6b06cb525fa9847915796b3b2482af9aa2
=======
        <button type='submit' className={style.buttonSignup}>Create Acount</button> 
>>>>>>> cbb4d1834418de493230df0649f7173fd17b1a86
      </form>
    </div>
  );
};

export default FormSignUp;
