import React from "react";
import { Link } from "react-router-dom";
import style from "./About.module.css";
import rami from "../../assets/rami.png";
import brian from "../../assets/brian.png";
import dani from "../../assets/daniel.png";
import tomi from "../../assets/tomas.png";
import valen from "../../assets/valen.png";
import santi from "../../assets/santi.png";
import josue from "../../assets/josue.png";

export const About = () => {
  return (
    <div className={style.maindiv}>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>Ramiro Soares Gache</h2>
            <h4>Developer and Designer UX/UI</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              sunt aut, facilis maxime impedit ipsa rerum quod nulla,
              voluptatibus iusto harum optio sequi eveniet? Nulla possimus
              assumenda nihil quam labore!
            </p>
            <Link
              to="https://www.linkedin.com/in/ramiro-soaresgache/"
              target="_blank"
            >
              {" "}
              Linkedin
            </Link>
            <Link to="https://github.com/ramisoaresgache" target="_blank">
              {" "}
              Github
            </Link>
            <Link
              to="https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/"
              target="_blank"
            >
              {" "}
              Portfolio
            </Link>
          </div>
          <img src={rami} alt="image not found" className={style.img} />
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>Tomas Alcaraz</h2>
            <h4>Developer</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              sunt aut, facilis maxime impedit ipsa rerum quod nulla,
              voluptatibus iusto harum optio sequi eveniet? Nulla possimus
              assumenda nihil quam labore!
            </p>
            <Link
              to="https://www.linkedin.com/in/tomas-alcaraz/"
              target="_blank"
            >
              {" "}
              Linkedin
            </Link>
            <Link to="https://github.com/TomasAlcaraz" target="_blank">
              {" "}
              Github
            </Link>
          </div>
          <img src={tomi} alt="image not found" className={style.img} />
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>Brian Policani</h2>
            <h4>Developer</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              sunt aut, facilis maxime impedit ipsa rerum quod nulla,
              voluptatibus iusto harum optio sequi eveniet? Nulla possimus
              assumenda nihil quam labore!
            </p>
            <Link
              to="https://www.linkedin.com/in/brian-policani/"
              target="_blank"
            >
              {" "}
              Linkedin
            </Link>
            <Link to="https://github.com/brianpolicani" target="_blank">
              {" "}
              Github
            </Link>
          </div>
          <img src={brian} alt="image not found" className={style.img} />
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>Valentino Villar</h2>
            <h4>Developer</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              sunt aut, facilis maxime impedit ipsa rerum quod nulla,
              voluptatibus iusto harum optio sequi eveniet? Nulla possimus
              assumenda nihil quam labore!
            </p>
            <Link to="https://www.linkedin.com/in/vlevillar/" target="_blank">
              {" "}
              Linkedin
            </Link>
            <Link to="https://github.com/vlevillar" target="_blank">
              {" "}
              Github
            </Link>
          </div>
          <img src={valen} alt="image not found" className={style.img} />
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>Daniel Martinez</h2>
            <h4>Developer</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              sunt aut, facilis maxime impedit ipsa rerum quod nulla,
              voluptatibus iusto harum optio sequi eveniet? Nulla possimus
              assumenda nihil quam labore!
            </p>
            <Link
              to="https://www.linkedin.com/in/daniel-martinez/"
              target="_blank"
            >
              {" "}
              Linkedin
            </Link>
            <Link to="https://github.com/dmc2m4" target="_blank">
              {" "}
              Github
            </Link>
          </div>
          <img src={dani} alt="image not found" className={style.img} />
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>Santiago Teran</h2>
            <h4>Developer</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              sunt aut, facilis maxime impedit ipsa rerum quod nulla,
              voluptatibus iusto harum optio sequi eveniet? Nulla possimus
              assumenda nihil quam labore!
            </p>
            <Link
              to="https://www.linkedin.com/in/santiago-teran/"
              target="_blank"
            >
              {" "}
              Linkedin
            </Link>
            <Link to="https://github.com/SantiTeran" target="_blank">
              {" "}
              Github
            </Link>
          </div>
          <img src={santi} alt="image not found" className={style.img} />
        </div>

        <div className={style.card}>
          <div className={style.circle}></div>
          <div className={style.content}>
            <h2>Josue Alfonzo</h2>
            <h4>Developer</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              sunt aut, facilis maxime impedit ipsa rerum quod nulla,
              voluptatibus iusto harum optio sequi eveniet? Nulla possimus
              assumenda nihil quam labore!
            </p>
            <Link
              to="https://www.linkedin.com/in/josuealfonzo/"
              target="_blank"
            >
              {" "}
              Linkedin
            </Link>
            <Link to="https://github.com/afonzojosue" target="_blank">
              {" "}
              Github
            </Link>
          </div>
          <img src={josue} alt="image not found" className={style.img} />
        </div>
      </div>
    </div>
  );
};
