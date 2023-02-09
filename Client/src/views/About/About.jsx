import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import style from "./About.module.css";
import rami from "../../assets/rami.png";
import brian from "../../assets/brian.png";
import dani from "../../assets/daniel.png";
import tomi from "../../assets/tomas.png";
import valen from "../../assets/valen.png";
import santi from "../../assets/santi.png";
import josue from "../../assets/josue.png";
import Footer from "../../components/Footer/Footer";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import portfolio from "../../assets/portfolio.png";

export const About = () => {
  return (
    <div className={style.maindiv}>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>Ramiro Soares Gache</h2>
            <h4>Developer and Designer UX/UI</h4>
            <a
              href="https://www.linkedin.com/in/ramiro-soaresgache/"
              className={style.linkLkdn}
              target="_blank"
            >
              Linkedin
            </a>
            <a
              href="https://www.github.com/ramisoaresgache/"
              className={style.linkGthb}
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/"
              className={style.linkPortfolio}
              target="_blank"
            >
              Portfolio
            </a>
          </div>
          <img src={rami} alt="image not found" className={style.img} />
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>Tomas Alcaraz</h2>
            <h4>Developer</h4>
            <a
              href="https://www.linkedin.com/in/tomas-alcaraz/"
              className={style.linkLkdn}
              target="_blank"
            >
              Linkedin
            </a>
            <a
              href="https://www.github.com/TomasAlcaraz/"
              className={style.linkGthb}
              target="_blank"
            >
              Github
            </a>
          </div>
          <img src={tomi} alt="image not found" className={style.img} />
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>Brian Policani</h2>
            <h4>Developer</h4>
            <a
              href="https://www.linkedin.com/in/brian-policani-303683252/"
              className={style.linkLkdn}
              target="_blank"
            >
              Linkedin
            </a>
            <a
              href="https://www.github.com/brianpolicani/"
              className={style.linkGthb}
              target="_blank"
            >
              Github
            </a>
          </div>
          <img src={brian} alt="image not found" className={style.img} />
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>Valentino Villar</h2>
            <h4>Developer</h4>
            <a
              href="https://www.linkedin.com/in/vlevillar/"
              className={style.linkLkdn}
              target="_blank"
            >
              Linkedin
            </a>
            <a
              href="https://www.github.com/vlevillar/"
              className={style.linkGthb}
              target="_blank"
            >
              Github
            </a>
          </div>
          <img src={valen} alt="image not found" className={style.img} />
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>Daniel Martinez</h2>
            <h4>Developer</h4>
            <a
              href="https://www.linkedin.com/in/daniel-martinez-0b6294109/"
              className={style.linkLkdn}
              target="_blank"
            >
              Linkedin
            </a>
            <a
              href="https://www.github.com/dmc2m4/"
              className={style.linkGthb}
              target="_blank"
            >
              Github
            </a>
          </div>
          <img src={dani} alt="image not found" className={style.img} />
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>Santiago Terán</h2>
            <h4>Developer</h4>
            <a
              href="https://www.linkedin.com/in/santiago-teran/"
              className={style.linkLkdn}
              target="_blank"
            >
              Linkedin
            </a>
            <a
              href="https://www.github.com/SantiTeran/"
              className={style.linkGthb}
              target="_blank"
            >
              Github
            </a>
          </div>
          <img src={santi} alt="image not found" className={style.img} />
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>Josue Alfonzo</h2>
            <h4>Developer</h4>
            <a
              href="https://www.linkedin.com/in/josuealfonzo/"
              className={style.linkLkdn}
              target="_blank"
            >
              Linkedin
            </a>
            <a
              href="https://www.github.com/alfonzojosue/"
              className={style.linkGthb}
              target="_blank"
            >
              Github
            </a>
          </div>
          <img src={josue} alt="image not found" className={style.img} />
        </div>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>

    </div>
  );
};
