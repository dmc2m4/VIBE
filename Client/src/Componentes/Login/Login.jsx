import React from "react";

const Login = () => {
  return (
    <div>
      {" "}
      <form>
        <label>Username:</label>
        <input type='text' id='username' name='username' />
        <label>Password:</label>
        <input type='password' id='password' name='password' />
        <button type='submit'>Login</button>
      </form>
      <p>Crear Cuenta</p>
      <p>
        Vincula cuanta con <span>Google</span>
      </p>
    </div>
  );
};

export default Login;
