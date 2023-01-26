import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import clothes from "../../assets/clothes.jpg";
import Login from "../Login/Login";
import style from "./Landing.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginGoogle } from "../../LoginGoogle.jsx/LoginGoogle";
import Home from "../../views/Home/Home";

const Landing = () => {
  const navigate = useNavigate();

  function homeButtom() {
    navigate("/home");
  }

  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

 
  return (
    <div className={style.container}>
      <div className={style.containerLogo}>

        <Link to='home'>
          <img
            src='https://media.discordapp.net/attachments/1065781982342164480/1065864756742869072/DALLE_2023-01-20_01.52.14_-logocopia.png?width=580&height=580'
            alt=''
            className={style.logo}

          />
        </Link>
      </div>
      <section className={style.sectionButton}>
        <div>
          <img
            src='https://s.elele.com.tr/storage/old/uploads/2017/12/05/9HzdVuxbmLMtUtG9.jpeg'
            alt='clothes'
            className={style.clothes}
          />
        </div>
        <div>
          <h1 className={style.titleLanding}>Hey!</h1>
          <p className={style.textLanding}>
            Shop top brands, <br />
            latest styles, great <br />
            deals on fashion <br />
            for all!
          </p>
          <LoginGoogle />
          {isAuthenticated && 
          <div>
            
            <h3>Hola {user.name} como estas ?</h3>
              <button onClick={()=>homeButtom()} >Home</button>
          </div>}
          <p className={style.textAccount}>Do you have an acoount?</p>
        </div>
      </section>
      <section className={style.welcome}>
        <h2>Welcome!</h2>
        <h2>About our store</h2>
        <p>Being beyond fashion, that is our style archetype.</p>
      </section>
    </div>)
  //  : (
  //   <Navigate to='/home' replace={<Home />} />
  // );
};

export default Landing;
