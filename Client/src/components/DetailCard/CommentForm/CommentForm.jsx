import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import postComment from "../../../redux/actions/postComment";


const CommentForm = (props) => {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        question: "",
        email: props.email,
        id: props.id
    })

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = () => {
        dispatch(postComment(input))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
            <input 
            type="text"
            name = "question"
            id = "question"
            placeholder="make your question"
            onChange={handleInputChange}></input>
            </div>
            <div>
                <button type="submit">Send question</button>
            </div>
            </form>
        </div>
    )
}

export default CommentForm;