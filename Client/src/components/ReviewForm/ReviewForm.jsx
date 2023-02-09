import React, { useState} from "react";
import { useDispatch} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import postReview from "../../redux/actions/postReview";
import styles from "./reviewForm.module.css"


const ReviewForm = () => {
    const user = sessionStorage.getItem('userEmail');
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        title: "",
        text: "",
        rating: 0,
        // email: "danielmartinez2m4@gmail.com",
        // id: "209038c0-a077-492a-8d89-3b421e655f8f"
        email: user,
        id: id
    })

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = () => {
        dispatch(postReview(input));
        navigate ("/myaccount/shoppinghistory");
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