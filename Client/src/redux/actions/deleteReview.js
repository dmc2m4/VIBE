import axios from "axios";
import { API_URL } from "../../config";

export const deleteReview = (id) => {
  return async function () {
    try {
      await axios.post(`${API_URL}/product/reviews/destroy`, id);
    } catch (error) {
      return alert(error.message);
    }
  };
};

export default deleteReview;
