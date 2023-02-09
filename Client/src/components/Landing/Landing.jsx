import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import style from "./Landing.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginGoogle } from "../../LoginGoogle.jsx/LoginGoogle";
import { useDispatch } from "react-redux";
import loginUser from "../../redux/actions/userLogin";
import getFavorites from "../../redux/actions/getFavorites";
import LandingVideo from "../../assets/LandingVideo.mp4";
import LogoVibe from "../../assets/LogoFullVIBE.png";

const Landing = () => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function homeButtom() {
    dispatch(loginUser(user)).then((res) => {
      dispatch(getFavorites(user.email));
    });
    sessionStorage.setItem("userEmail", user.email);
    navigate("/home");
  }

  return (
    <div className={style.container}>
      <section className={style.sectionButton}>
        <div>
          <video className={style.videoTag} autoPlay loop muted>
            <source src={LandingVideo} type="video/mp4" />
          </video>
          <div className={style.textContainer}>
          <div className={style.logoContainer}>
            <img src={LogoVibe} className={style.logo} />
          </div>
            <h1 className={style.titleLanding}>Hey!</h1>
            <p className={style.textLanding}>
              Shop top brands, <br />
              latest styles, great <br />
              deals on fashion <br />
              for all!
            </p>
            <LoginGoogle />
            {isAuthenticated && (
              <div>
                <h3>
                  Hello! <br />
                  {user.given_name}
                </h3>
                <button
                  onClick={() => homeButtom()}
                  className={style.buttonLanding}
                >
                  Home
                </button>
              </div>
            )}
            {!isAuthenticated && (
              <p className={style.textAccount}>Do you have an acoount?</p>
            )}
          </div>
        </div>
      </section>
      <section className={style.welcome}>
        <h2>Welcome!</h2>
        <h2>About our store</h2>
        <p>
          Being beyond fashion, that is our style archetype.{" "}
          <Link to="/home" className={style.link}>
            Go now →
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Landing;
