import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import postReview from "../../redux/actions/postReview";
import styles from "./reviewForm.module.css"


const ReviewForm = () => {
    const user = useSelector(state => state.User)
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        title: "",
        text: "",
        rating: 0,
        // email: user.email,
        // id: id,
        email: "danielmartinez2m4@gmail.com",
        id: "869d6be0-6df0-4db8-8411-535053f41805"
    })

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = () => {
        dispatch(postReview(input));
        // navigate ("/purchases");
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
            <div>
            <input 
            type="text"
            name = "title"
            id = "title"
            placeholder="Title"
            onChange={handleInputChange}></input>
            </div>
            <div>
            <input 
            type ="text"
            name = "text"
            id = "text"
            placeholder="Text"
            onChange={handleInputChange}></input>
            </div>
            <div>
            <input 
            type="number"
            name = "rating"
            id = "rating"
            placeholder="Rating"
            onChange={handleInputChange}></input>
            </div>
            <div>
                <button type="submit">Send review</button>
            </div>
            </form>
        </div>
    )
}

export default ReviewForm;