import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Landing.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginGoogle } from "../../LoginGoogle.jsx/LoginGoogle";


const Landing = () => {
  const navigate = useNavigate();

  function homeButtom() {
    navigate("/home");
  }

  const { user, isAuthenticated } = useAuth0();
  
  return (
    <div className={style.container}>
      <div className={style.containerLogo}>
        <img
          src='https://media.discordapp.net/attachments/1065781982342164480/1065864756742869072/DALLE_2023-01-20_01.52.14_-logocopia.png?width=580&height=580'
          alt=''
          className={style.logo}
        />
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
          <LoginGoogle  />
          {isAuthenticated && 
          <div>
            
            <h3 >Hey!!! <br />{user.given_name}</h3>
              <button onClick={()=>homeButtom()}  className={style.buttonLanding}>Home</button>
          </div>}
          {!isAuthenticated && <p className={style.textAccount}>Do you have an acoount?</p>}
        </div>
      </section>
      <section className={style.welcome}>
        <h2>Welcome!</h2>
        <h2>About our store</h2>
        <p>Being beyond fashion, that is our style archetype. <Link to='/home' className={style.link}>Go now →</Link></p>
      </section>
    </div>
  );
};

export default Landing;
