import React from "react";
import { useSelector } from "react-redux";
import style from './Profile.module.css'

const Profile = () => {
  const user = useSelector(state => state.User)

  return (
    <div className={style.container}>
      <img src={user.img} alt='image not found' className={style.userImage}/>
      <h4 className={style.userData}>Full Name: {user.name}</h4>
      <h4 className={style.userData}>Email: {user.email}</h4>
    </div>
  );
};

export default Profile;