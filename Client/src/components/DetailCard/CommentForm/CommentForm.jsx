import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import postComment from "../../../redux/actions/postComment";
import style from "./CommentForm.module.css";

const CommentForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
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
        dispatch(postComment(input)).then(res => {
            navigate(`/productDetail/${props.id}`)
        })
    }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.containerForm}>
        <div className={style.containerComment}>
          <label className={style.text}>Ask to the seller</label>
          <input
            type="text"
            name = "question"
            id = "question"
            onChange={handleInputChange}
            placeholder="Ask a question..."
            className={style.inputComment}></input>
            </div>
            <div className={style.containerButton}>
                <button type="submit" className={style.buttonComment}>Send question</button>
            </div>
            </form>
        </div>
    )
}

export default CommentForm;
