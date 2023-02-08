import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import postComment from "../../../redux/actions/postComment";
import style from "./CommentForm.module.css";

const CommentForm = (props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    question: "",
    response: "",
    email: props.email,
    id: props.id,
  });

  const user = useSelector((state) => state.User);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(postComment(input));
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.containerForm}>
        <div className={style.containerComment}>
          <label className={style.text}>Ask the seller</label>
          <input
            type="text"
            name="question"
            id="question"
            placeholder="Write a question..."
            className={style.inputComment}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className={style.containerButton}>
          <button type="submit" className={style.buttonComment}>
            Send question
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
