import axios from 'axios';
import { API_URL } from "../../config";

const postReview = (value) => {
    return async function () {
        try {
            await axios.post(`${API_URL}/product/reviews`, value)
        } catch (error) {
            return alert(error.message)
        }
    };
};

export default postReview;
