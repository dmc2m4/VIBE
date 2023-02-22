import React from "react";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import logo from "../../assets/iconVibe.png";
import style from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.containerSection}>
        <section>
          <img src={logo} alt='logo' className={style.logo} />
        </section>
        <section className={style.textContainer}>
          <p>Soporte</p>
          <p>Terminos y condiciones</p>
          <p>Defensa al consumidor</p>
          <NavLink to='/frequentquestion' className={style.QyA}>
            <p>Preguntas Frecuentes</p>
          </NavLink>
        </section>
        <section className={style.textContainer}>
          <p>Contacto</p>
          <p>Argentina | Colombia | Venezuela</p>
          <p>Vibes@gmail.com</p>
          <p>+54 5899 3658</p>
          {/* <Link to='/about'>
            <p>About us</p>
          </Link> */}
        </section>
        <section>
          <h3 className={style.redes}>Nuestras redes:</h3>
          <img src={twitter} alt='' className={style.socialImg} />
          <img src={facebook} alt='' className={style.socialImg} />
          <img src={instagram} alt='' className={style.socialImg} />
        </section>
      </div>
    </footer>
  );
};

export default Footer;
