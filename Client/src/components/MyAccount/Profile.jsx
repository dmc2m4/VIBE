import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import style from './Profile.module.css'

const Profile = () => {
  const { user } = useAuth0();

  return (
    <div className={style.container}>
      <img src={user.picture} alt='image not found' className={style.userImage}/>
      <h4 className={style.userData}>Nickname: {user.nickname}</h4>
      <h4 className={style.userData}>Full Name: {user.name}</h4>
      <h4 className={style.userData}>Email: {user.email}</h4>
    </div>
  );
};

export default Profile;