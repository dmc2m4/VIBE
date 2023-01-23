import React from "react";
import { Link, useNavigate } from "react-router-dom";
import clothes from "../../assets/clothes.jpg";
import Login from "../Login/Login";
import style from "./Landing.module.css";

const Landing = () => {
  const navigate = useNavigate()

  function signUpBotton (){
    navigate("/signup")
  }


  return (
    <div className={style.container}>
      <div className={style.containerLogo}>
        <img
          src="https://cdn.discordapp.com/attachments/1065781982342164480/1067134458400088294/DALLE_2023-01-20_01.52.14_-logocopia.png"
          alt=""
          className={style.logo}
        />
      </div>
      <section className={style.sectionButton}>
        <div>
          <img
            src="https://s.elele.com.tr/storage/old/uploads/2017/12/05/9HzdVuxbmLMtUtG9.jpeg"
            alt="clothes"
            className={style.clothes}
          />
        </div>
        <div>
          <h1 className={style.titleLanding}>Hey!</h1>
          <p className={style.textLanding}>
            Shop top brands, <br />
            latest styles, great <br />
            deals on fashion <br />
            for all!a
          </p>
          <button className={style.buttonLanding} onClick={(e => signUpBotton(e))}>Sign up</button>
          <p className={style.textAccount}>Do you have an acoount?</p>
          <Link to ="/login">
          <p className={style.textSign}>Sign In</p>
          </Link>
        </div>
      </section>
      <section className={style.welcome}>
        <h2>Welcome!</h2>
        <h2>About our store</h2>
        <p>Being beyond fashion, that is our style archetype.</p>
      </section>
    </div>
  );
};

export default Landing;
