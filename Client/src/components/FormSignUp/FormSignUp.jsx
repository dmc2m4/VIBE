import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import createUser from "../../redux/actions/createUser.action";

const FormSignUp = () => {
  const dispatch = useDispatch();
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
    if (input.password !== input.confirmPassword)
      error.password = "Las contraseñas no coinciden";
    return error;
  }

  function handleSubmit() {
    if (
      !(
        newUser.name &&
        newUser.email &&
        newUser.password &&
        newUser.confirmPassword
      )
    ) {
      return alert("Por favor completar todos los campos");
    }
    dispatch(createUser(newUser));
    console.log(newUser);
    // alert("usuario creado correctamente");
  }

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Username:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="enter your username"
          onChange={handleChange}
        />
        <label>Mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="enter your mail"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="enter your password"
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirm your password"
          onChange={handleChange}
        />
        {/* <label>Accept the terms and conditions</label>
        <input type='checkbox' id='accptterms' name='acceptterms' value='si' /> */}
        <button type="submit">Create Acount</button>
        {error ? (
          <div>
            {error.forEach((e) => {
              return <div>{e}</div>;
            })}
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default FormSignUp;
