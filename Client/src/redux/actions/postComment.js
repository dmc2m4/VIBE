import axios from 'axios';
import { API_URL } from "../../config";

const postComment = (value) => {
    return async function () {
        try{
            await axios.post(`${API_URL}/comment`, value)
        }catch(error){
            alert(error.message)
        }
    }
};

export default postComment;