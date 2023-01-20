import React from "react";
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
    </div>
  );
};

export default Login;
