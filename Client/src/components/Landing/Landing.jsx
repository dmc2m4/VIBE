import React from "react";
import clothes from '../../assets/clothes.jpg'
import Login from "../Login/Login";
import style from './Landing.module.css'


const Landing = () => {

  return (
    <div className={style.container}>
      <div className={style.containerLogo}>
    <img src="https://cdn.discordapp.com/attachments/1065781982342164480/1065845744872980480/Sin_titulo-1.png" alt="" className={style.logo} />
      </div>
      <section className={style.sectionButton}>
        <div>
          <img src="https://s.elele.com.tr/storage/old/uploads/2017/12/05/9HzdVuxbmLMtUtG9.jpeg" alt="clothes" className={style.clothes} />
        </div>
        <div>
          <h1 className={style.titleLanding}>Hey!</h1>
          <p className={style.textLanding}>Shop top brands, <br />
          latest styles, great <br />
          deals on fashion <br />
          for all!</p>
          <button className={style.buttonLanding}>Sign up</button>
          <p className={style.textAccount}>Do you have an acoount?</p>
          <p className={style.textSign}>Sign In</p>
        </div>
      </section>
      <section className={style.welcome}>
        <h2 >Welcome!</h2>
        <h2>About our store</h2>
        <p>Being beyond fashion, that is our style archetype.</p>
      </section>
    
    </div>
  );
};

export default Landing;
