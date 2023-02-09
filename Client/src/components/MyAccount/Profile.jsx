import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import style from './Profile.module.css'
export const Profile = () => {
  const { user } = useAuth0();

  return (
    <div className={style.container}>
       <div className={style.back}>
      <Link to='/myaccount' className={style.back}>
      <img src='https://cdn-icons-png.flaticon.com/512/507/507257.png' alt="back" className={style.iconBack}/>
      </Link>
      </div>
      <div className={style.containerTitle}>
        <h1>My Profile</h1>
      </div>
      <div className={style.dates}>
      <div className={style.containerText}>
      <h2>Nickname: </h2>
      <h3 className={style.textDate}>
      {user.nickname}
      </h3>
      <h2>Full Name:</h2>
      <h3 className={style.textDate}>
      {user.name}
      </h3>
      <h2>Email:</h2>
      <h3 className={style.textDate}>
      {user.email}
      </h3>
      </div>
      <div>
      <img src={user.picture} alt='image not found' className={style.imgProfile} />
      </div>
      </div>
    </div>
  );
};
