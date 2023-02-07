import axios from "axios";
import { API_URL } from "../../config";

const deleteComment = (id) => {
  return async function () {
    try {
      await axios.post(`${API_URL}/comment/destroy`, id);
    } catch (error) {
      return alert(error.message);
    }
  };
};

export default deleteComment;
