import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import postReview from "../../redux/actions/postReview";
import styles from "./reviewForm.module.css";

const ReviewForm = () => {
  const user = sessionStorage.getItem("userEmail");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    text: "",
    rating: 0,
    email: user,
    id: id,
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(postReview(input));
    navigate("/myaccount/purchases");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              className={styles.containerInput}
              type="text"
              name="title"
              id="title"
              placeholder="Review title..."
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <textarea 
              rows="3"
              className={styles.containerInput}
              name="text"
              id="text"
              placeholder="Enter your review..."
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <input
              className={styles.containerInput}
              type="number"
              min="1" 
              max="5"
              name="rating"
              id="rating"
              placeholder="Rating"
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <div className={styles.containerDiv}>
          <button type="submit" className={styles.containerButton}>
            Send review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
