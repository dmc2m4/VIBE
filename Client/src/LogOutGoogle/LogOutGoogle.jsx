import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogOutGoogle = () => {
  const { logout, user, isAuthenticated } = useAuth0();

  return isAuthenticated && <a onClick={() => logout()}>LogOut</a>;
};
