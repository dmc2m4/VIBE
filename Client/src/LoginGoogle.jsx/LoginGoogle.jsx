import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginGoogle = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  console.log(user);
  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>Login</button>
    )
  );
};
