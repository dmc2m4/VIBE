import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import createDetail from "../../redux/actions/createDetail";
import cleanDetail from "../../redux/actions/cleanDetail";
import { addToCart } from "../../redux/actions/shoppingCart";
import style from "./DetailCard.module.css";
import SwiperCard from "../SwiperCard/SwiperCard";
import CommentForm from "./CommentForm/CommentForm";

const DetailCard = () => {
  const detail = useSelector((state) => state.Detail);
  const [stock, setStock] = useState(detail.stock);
  const { id } = useParams();
  const dispatch = useDispatch();
  const array = [1, 2, 3, 4, 5];
  const user = sessionStorage.getItem("userEmail");

  function addToCar() {
    dispatch(addToCart(detail));
    setStock(stock - 1);
  }

  useEffect(() => {
    dispatch(createDetail(id));
    return function () {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);
 
  // const images = detail.img.split(",");
  function setImages(det) {
    const images = det.img;
    return (
      <div className={style.containerImg}>
        {images.split("").map((element) => {
          return (
            <img src={element} alt="images" className={style.productImg} />
          );
        })}
      </div>
    );
  }

  // function addSelect(name, arr) {
  //   const nameFormatted = name.charAt(0).toUpperCase() + name.slice(1);
  //   return (
  //     <div className={style.containerInput}>
  //       <label>{nameFormatted}</label>
  //       <select onChange={handleChange} name={name} className={style.inputForm}>
  //         {<option hidden>{nameFormatted}</option>}
  //         {arr.map((element) => {
  //           return <option value={element}>{element}</option>;
  //         })}
  //       </select>
  //     </div>
  //   );
  // }
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
        {/* {images.map((element) => {
          return (
            <div className={style.containerImg}>
              <img
                src={element}
                alt="Image Product"
                className={style.productImg}
              />
            </div>
          );
        })} */}
        {/* {detail.img?.split(",").map((element) => {
          return (
            <div className={style.containerImg}>
              <img src={element} alt="images" className={style.productImg} />
            </div>
          );
        })} */}
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
                {array.slice(0, detail.rating).map((e, i) => (
                  <div className={style.rating} key={i}>
                    <p>⭐</p>
                  </div>
                ))}{" "}
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
        {detail.Reviews?.map((m) => {
          return (
            <div>
              <p>{m.title}</p>
              <p>{m.rating}</p>
              <p>{m.text}</p>
            </div>
          )
        })}
        <CommentForm
        id={id}
        email={user}
        />
        {detail.Comments?.map((m) => {
          return (
            <div className={style.containerUser}>
            <div className={style.containerEmail}>
              <img src ={m.Users[0].img} alt="imagen" className={style.imgUser}/>
              <h2 className={style.email}>{m.Users[0].email}</h2>
              </div>
              <div className={style.containerQuestion}>
              <p>{m.question}</p>
            
            {m.response? m.response: <button className={style.buttonQuestion}>answer question</button>}
            </div>
            </div>
          )
        })}
        {/* {detail.reviews?.map((m) => (
        
        ))} */}
      </div>
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
        asperiores illum ea rerum rem non quia, dolor hic dolorem nemo aut
        deserunt odio enim dicta amet iusto vero. Aliquam, laudantium.
      </p> */}
      {/* <textarea name="comments" id="comments" cols="100" rows="10"></textarea>
      <button>Add comment</button> */}
    </div>
  );
};

export default DetailCard;
