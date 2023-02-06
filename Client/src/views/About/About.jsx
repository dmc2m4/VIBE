import React from "react";
import { Link } from "react-router-dom";
import rami from "../../assets/rami.jpeg";
import brian from "../../assets/brian.jpeg";
import dani from "../../assets/daniel.jpeg";
import tomi from "../../assets/tomas.jpeg";
import valen from "../../assets/valen.jpeg";
import santi from "../../assets/santi.jpeg";
import josue from "../../assets/josue.jpg";
import github from '../../assets/github.png'
import portfolio from '../../assets/portafolio.png'
import linkedin from '../../assets/linkedin.png'
import style from './About.module.css'



export const About = () => {
  return (
    <div className={style.container}>
    <h1 className={style.title}>Collaborators</h1>
    <div className={style.containerCollage}>

      <div className={style.containerPerson}>
      <div className={style.circle}></div>
        <img src={rami} alt='image nt found' className={style.imgProfile} />
        <h4>Ramiro Soares Gache</h4>
        <p>Developer</p>
        <p>
        </p>
        <div>
        <a
          href='https://www.linkedin.com/in/ramiro-soaresgache/'
          target='_blank'
        >
        <img src={linkedin} alt='github' className={style.imgLinks}/>
        </a>
        <a href='https://github.com/ramisoaresgache' target='_blank'>
          <img src={github} alt='github' className={style.imgLinks}/>
        </a>
        <a
          href='https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/'
          target='_blank'
        >
          <img src={portfolio} alt='github' className={style.imgLinks}/>
        </a>
        </div>
      </div>
      <div className={style.containerPerson}>
      <div className={style.circle}></div>
        <img src={tomi} alt='' className={style.imgProfile}/>
        <h4>Tomas Alcaraz</h4>
        <p>Developer</p>
        <p>
        </p>
        <div>
        <a href='https://www.linkedin.com/in/tomas-alcaraz/' target='_blank'>
        <img src={linkedin} alt='github' className={style.imgLinks}/>
        </a>
        <a href='https://github.com/TomasAlcaraz' target='_blank'>
        <img src={github} alt='github' className={style.imgLinks}/>
        </a>
         <a
          href='https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/'
          target='_blank'
        >
        <img src={portfolio} alt='github' className={style.imgLinks}/>
        </a> 
        </div>
      </div>
      <div className={style.containerPerson}>
      <div className={style.circle}></div>
        <img src={brian} alt='' className={style.imgProfile} />
        <h4>Brian Policani</h4>
        <p>Developer</p>
        <p>
        </p>
        <div>
        <a
          href='https://www.linkedin.com/in/brian-policani-303683252/'
          target='_blank'
        >
      <img src={linkedin} alt='github' className={style.imgLinks}/>
        </a>
        <a href='https://github.com/brianpolicani' target='_blank'>
        <img src={github} alt='github' className={style.imgLinks}/>
        </a>
        <a
          href='https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/'
          target='_blank'
        >
        <img src={portfolio} alt='github' className={style.imgLinks}/>
        </a>
        </div>
      </div>
      <div className={style.containerPerson}>
      <div className={style.circle}></div>
        <img src={valen} alt='' className={style.imgProfile} />
        <h4>Valentino Villar</h4>
        <p>Developer</p>
        <p>
        </p>
        <div>
        <a href='https://www.linkedin.com/in/vlevillar/' target='_blank'>
        <img src={linkedin} alt='github' className={style.imgLinks}/>
        </a>
        <a href='https://github.com/vlevillar' target='_blank'>
        <img src={github} alt='github' className={style.imgLinks}/>
        </a>
        <a
          href='https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/'
          target='_blank'
        >
        <img src={portfolio} alt='github' className={style.imgLinks}/>
        </a> 
        </div>
      </div>
      <div className={style.containerPerson}>
      <div className={style.circle}></div>
        <img src={dani} alt='' className={style.imgProfile}/>
        <h4>Daniel Martinez</h4>
        <p>Developer</p>
        <p>
        </p>
        <div>
        <a
          href='https://www.linkedin.com/in/daniel-martinez-0b6294109/'
          target='_blank'
        >
        <img src={linkedin} alt='github' className={style.imgLinks}/>
        </a>
        <a href='https://github.com/dmc2m4' target='_blank'>
        <img src={github} alt='github' className={style.imgLinks}/>
        </a>
         <a
          href='https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/'
          target='_blank'
        >
        <img src={portfolio} alt='github' className={style.imgLinks}/>
        </a> 
        </div>
      </div>
      <div className={style.containerPerson}>
      <div className={style.circle}></div>
        <img src={santi} alt='' className={style.imgProfile}/>
        <h4>Santiago Teran</h4>
        <p>Developer</p>
        <p>
        </p>
        <div>
        <a href='https://www.linkedin.com/in/santiago-teran/' target='_blank'>
        <img src={linkedin} alt='github' className={style.imgLinks}/>
        </a>
        <a href='https://github.com/SantiTeran' target='_blank'>
        <img src={github} alt='github' className={style.imgLinks}/>
        </a>
       <a
          href='https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/'
          target='_blank'
        >
          <img src={portfolio} alt='github' className={style.imgLinks}/>
        </a> 
        </div>
      </div>
      <div className={style.containerPerson}>
      <div className={style.circle}></div>
        <img src={josue} alt='' className={style.imgProfile}/>
        <h4>Josue Alfonzo</h4>
        <p>Developer</p>
        <p>
        </p>
        <div>
        <a  href='https://www.linkedin.com/in/josuealfonzo/' target='_blank'>
        <img src={linkedin} alt='github' className={style.imgLinks}/>
        </a>
        <a href='https://github.com/alfonzojosue' target='_blank'>
        <img src={github} alt='github' className={style.imgLinks}/>
        </a>
         <Link
         to='https://portfolio-gl9r4sdl0-ramisoaresgache.vercel.app/'
          target='_blank'
        >
        <img src={portfolio} alt='github' className={style.imgLinks}/>
        </Link> 
        </div>
      </div>
      </div>
    </div>
  );
};
