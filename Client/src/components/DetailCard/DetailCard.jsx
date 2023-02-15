import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import createDetail from "../../redux/actions/createDetail";
import cleanDetail from "../../redux/actions/cleanDetail";
import { addToCart } from "../../redux/actions/shoppingCart";
import style from "./DetailCard.module.css";
import SwiperCard from "../SwiperCard/SwiperCard";
import CommentForm from "./CommentForm/CommentForm";
import ResponseForm from "./CommentForm/ResponseComment";
import deleteComment from "../../redux/actions/deleteComment";

const DetailCard = () => {
  const detail = useSelector((state) => state.Detail);
  const items = useSelector((state) => state.Cart);
  localStorage.setItem("globalCart", JSON.stringify(items));
  const [stock, setStock] = useState(detail.stock);
  const { id } = useParams();
  const dispatch = useDispatch();
  const array = [1, 2, 3, 4, 5];
  const user = sessionStorage.getItem("userEmail");
  const stateUser = useSelector((state) => state.User);
  const [deleted, setDeleted] = useState(false);
  const [idcomment, setIdcomment] = useState("");

  function addToCar() {
    dispatch(addToCart(detail))
    setStock(stock - 1);
  }

  useEffect(() => {
    dispatch(createDetail(id));
    if (deleted) {
      dispatch(deleteComment(idcomment));
      setDeleted(false);
      setIdcomment("");
    }
    return function () {
      dispatch(cleanDetail());
    };
  }, [dispatch, id, deleted]);

  const handleDelete = (e) => {
    e.preventDefault();
    setIdcomment(e.target.value);
    setDeleted(true);
  };

  function promedioRating() {
    var sumatoria = detail?.Reviews?.reduce(function (a, b) {
      return a + b.rating;
    }, 0);
    var promedio = sumatoria / detail?.Reviews?.length;
    console.log(detail.Reviews?.length);
    if (detail.Reviews?.length == false) return "No references";
    return Math.round(promedio);
  }

  function renderStars(n) {
    let result = "";
    console.log(n);
    for (let i = 0; i < n; i++) {
      result += "⭐";
    }
    return result;
  }

  let stars = promedioRating();

  return (
    <div className={style.container}>
      <div className={style.back}>
        <Link to="/shop" className={style.back}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/507/507257.png"
            alt="back"
            className={style.icon}
          />
        </Link>
      </div>
      <div className={style.containerProduct}>
        <div className={style.containerImg}>
          <SwiperCard props={detail.img} />
        </div>
        <div className={style.containerDetail}>
          <div className={style.containerTitle}>
            <h1 className={style.title}>{detail.name}</h1>
          </div>
          <div className={style.containerText}>
            <p className={style.rating}>
              {" "}
              <p className={style.textDetail}>Price: </p> {detail.cost} $
            </p>
            <p className={style.rating}>
              {" "}
              <p className={style.textDetail}>Size: </p> {detail.size}
            </p>
            <p className={style.rating}>
              {" "}
              <p className={style.textDetail}>Color:</p> {detail.color}
            </p>
            <p className={style.rating}>
              {" "}
              <p className={style.textDetail}>Category: </p>
              {detail.category}
            </p>
            <p className={style.rating}>
              {" "}
              <p className={style.textDetail}>Gender:</p> {detail.gender}
            </p>
            <p className={style.rating}>
              {" "}
              <p className={style.textDetail}>Season: </p> {detail.season}
            </p>
            <p className={style.rating}>
              {" "}
              <p className={style.textDetail}>Stock: </p> {detail.stock}
            </p>
            <div>
              <p className={style.rating}>
                <p className={style.textDetail}>Rating: </p>{" "}
                <p>{renderStars(stars)}</p>
              </p>
            </div>
          </div>
          <div className={style.containerButtonAdd}>
            <button className={style.buttonAdd} onClick={addToCar}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div>
        {detail.Reviews?.map((m, i) => {
          return (
            <div className={style.containerReview}>
              <h4 key={i}>{m.title}</h4>
              <p key={i}>{m.text}</p>
              <p key={i}>Rating: {m.rating}</p>
            </div>
          );
        })}
        <CommentForm id={id} email={user} />
        {detail.Comments?.map((m) => {
          return (
            <div className={style.containerUser}>
              {stateUser.isAdmin ? (
                <div>
                  <button
                    value={m.id}
                    onClick={(e) => handleDelete(e)}
                    className={style.containerX}
                  >
                    X
                  </button>
                </div>
              ) : null}
              <div /* className={style.containerUser} */>
                <div className={style.containerEmail}>
                  <img
                    src={m.Users && m.Users[0].img}
                    alt="imagen"
                    className={style.imgUser}
                  />
                  <h2 className={style.email}>{m.Users && m.Users[0].email}</h2>
                </div>
                <div className={style.containerQuestion}>
                  <p>{m.question}</p>
                  <p>{m.response ? m.response : <ResponseForm id={m.id} />}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailCard;
