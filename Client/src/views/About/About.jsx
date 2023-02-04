import React from "react";
import { Link } from "react-router-dom";
import rami from "../../assets/rami.jpeg";
import brian from "../../assets/brian.jpeg";
import dani from "../../assets/daniel.jpeg";
import tomi from "../../assets/tomas.jpeg";
import valen from "../../assets/valen.jpeg";
import santi from "../../assets/santi.jpeg";
import style from './About.module.css'



export const About = () => {
  return (
    <div className={style.container}>
      <div>
        <img src={rami} alt='image nt found' />
        <h4>Ramiro Soares Gache</h4>
        <p>Developer and Designer UX/UI</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sunt
          aut, facilis maxime impedit ipsa rerum quod nulla, voluptatibus iusto
          harum optio sequi eveniet? Nulla possimus assumenda nihil quam labore!
        </p>
        <Link
          to='https://www.linkedin.com/in/ramiro-soaresgache/'
          target='_blank'
        >
          {" "}
          Linkedin
        </Link>
        <Link to='https://github.com/ramisoaresgache' target='_blank'>
          {" "}
          Github
        </Link>
        <Link
          to='https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/'
          target='_blank'
        >
          {" "}
          Portfolio
        </Link>
      </div>
      <div>
        <img src={tomi} alt='' />
        <h4>Tomas Alcaraz</h4>
        <p>Developer</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sunt
          aut, facilis maxime impedit ipsa rerum quod nulla, voluptatibus iusto
          harum optio sequi eveniet? Nulla possimus assumenda nihil quam labore!
        </p>
        <Link to='https://www.linkedin.com/in/tomas-alcaraz/' target='_blank'>
          {" "}
          Linkedin
        </Link>
        <Link to='https://github.com/TomasAlcaraz' target='_blank'>
          {" "}
          Github
        </Link>
        {/* <Link
          to='https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/'
          target='_blank'
        >
          {" "}
          Portfolio
        </Link> */}
      </div>
      <div>
        <img src={brian} alt='' />
        <h4>Brian Policani</h4>
        <p>Developer</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sunt
          aut, facilis maxime impedit ipsa rerum quod nulla, voluptatibus iusto
          harum optio sequi eveniet? Nulla possimus assumenda nihil quam labore!
        </p>
        <Link
          to='https://www.linkedin.com/in/brian-policani-303683252/'
          target='_blank'
        >
          {" "}
          Linkedin
        </Link>
        <Link to='https://github.com/brianpolicani' target='_blank'>
          {" "}
          Github
        </Link>
        {/* <Link
          to='https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/'
          target='_blank'
        >
          {" "}
          Portfolio
        </Link> */}
      </div>
      <div>
        <img src={valen} alt='' />
        <h4>Valentino Villar</h4>
        <p>Developer</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sunt
          aut, facilis maxime impedit ipsa rerum quod nulla, voluptatibus iusto
          harum optio sequi eveniet? Nulla possimus assumenda nihil quam labore!
        </p>
        <Link to='https://www.linkedin.com/in/vlevillar/' target='_blank'>
          {" "}
          Linkedin
        </Link>
        <Link to='https://github.com/vlevillar' target='_blank'>
          {" "}
          Github
        </Link>
        {/* <Link
          to='https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/'
          target='_blank'
        >
          {" "}
          Portfolio
        </Link> */}
      </div>
      <div>
        <img src={dani} alt='' />
        <h4>Daniel Martinez</h4>
        <p>Developer</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sunt
          aut, facilis maxime impedit ipsa rerum quod nulla, voluptatibus iusto
          harum optio sequi eveniet? Nulla possimus assumenda nihil quam labore!
        </p>
        <Link
          to='https://www.linkedin.com/in/daniel-martinez-0b6294109/'
          target='_blank'
        >
          {" "}
          Linkedin
        </Link>
        <Link to='https://github.com/dmc2m4' target='_blank'>
          {" "}
          Github
        </Link>
        {/* <Link
          to='https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/'
          target='_blank'
        >
          {" "}
          Portfolio
        </Link> */}
      </div>
      <div>
        <img src={santi} alt='' />
        <h4>Santiago Teran</h4>
        <p>Developer</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sunt
          aut, facilis maxime impedit ipsa rerum quod nulla, voluptatibus iusto
          harum optio sequi eveniet? Nulla possimus assumenda nihil quam labore!
        </p>
        <Link to='https://www.linkedin.com/in/santiago-teran/' target='_blank'>
          {" "}
          Linkedin
        </Link>
        <Link to='https://github.com/SantiTeran' target='_blank'>
          {" "}
          Github
        </Link>
        {/* <Link
          to='https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/'
          target='_blank'
        >
          {" "}
          Portfolio
        </Link> */}
      </div>
      <div>
        <img src='' alt='' />
        <h4>Josue Alfonzo</h4>
        <p>Developer</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sunt
          aut, facilis maxime impedit ipsa rerum quod nulla, voluptatibus iusto
          harum optio sequi eveniet? Nulla possimus assumenda nihil quam labore!
        </p>
        <Link to='https://www.linkedin.com/in/josuealfonzo/' target='_blank'>
          {" "}
          Linkedin
        </Link>
        <Link to='https://github.com/alfonzojosue' target='_blank'>
          {" "}
          Github
        </Link>
        {/* <Link
          to='https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/'
          target='_blank'
        >
          {" "}
          Portfolio
        </Link> */}
      </div>
    </div>
  );
};
