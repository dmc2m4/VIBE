import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user } = useAuth0();

  console.log(user);

  return (
    <div>
      <Link to='/myaccount'>
        <button>Back</button>
      </Link>
      <img src={user.picture} alt='image not found' />
      <h4>Nickname: {user.nickname}</h4>
      <h4>Full Name: {user.name}</h4>
      <h4>Email: {user.email}</h4>
    </div>
  );
};
