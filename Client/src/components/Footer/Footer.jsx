import React from 'react'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import style from './Footer.module.css'




const Footer = () => {
  return (
    <footer className={style.footerContainer}>
        <div className={style.containerSection}>
            <section>
            <img src="" alt="Logo" />
            </section>
            <section>
                <p>Terminos y condiciones</p>
                <p>Defensa al consumidor</p>
                <p>About us</p>
                <p>Ayuda</p>
            </section>
            <section>
            <h3>Nuestras redes:</h3>
            <img src={twitter} alt="" className={style.socialImg} />
            <img src={facebook} alt="" className={style.socialImg} />
            <img src={instagram} alt="" className={style.socialImg} />
            </section>
        </div>
    </footer>
  )
}

export default Footer