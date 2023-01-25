import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import settingsAccount from "../../redux/actions/settingsAccount"

const SettingsAccount = () => {
 const account = useSelector((state) => state.Account);
 const { id } = useParams();
 const dispatch = useDispatch();

 useEffect(() => {
    dispatch(settingsAccount(id));
}, [dispatch, id]);

  return (
    <div>
      <h1>My account</h1>
      <div className="account">
        <img src= {account.img} alt="ImgAcc" className="imgAcc" />
        <h2 className="userNameAcc">{account.name}</h2>
        <h3 className="emailAcc">{account.email}</h3>
      </div>
    </div>
  );
};

export default SettingsAccount;
