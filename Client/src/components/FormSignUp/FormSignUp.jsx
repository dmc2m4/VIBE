import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import createUser from "../../redux/actions/createUser.action";

const FormSignUp = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState([]);
  const [newUser, setNewUser] = useState({
    username: "",
    pastword: "",
    confirmPastword: "",
    email: "",
  });
  function handleChange(e) {
    validate(newUser);
    if (!setError) {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }
  }
  function validate(user) {
    const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
    if (!regExpEmail.test(user.email)) {
      setError([...error], "El email es inválido");
    }
    if (!user.username) {
      setError([...error], "Introduzca un nombre de usuario");
    }
    if (user.pastword !== user.confirmPastword) {
      setError([...error], "Las contraseñas no coinciden");
    }
    if (
      !(user.pastword && user.email && user.username && user.confirmPastword)
    ) {
      setError([...error], "Rellenar todos los campos");
    }
    setError([]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(error);
    dispatch(createUser(newUser));
  }
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Username:</label>
        <input
          type="text"
          id="username"
          name="username"
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
