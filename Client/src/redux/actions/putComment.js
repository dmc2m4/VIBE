import axios from "axios";
import { API_URL } from "../../config";

const putComment = (value) => {
  return async function () {
    try {
      await axios.put(`${API_URL}/comment`, value);
    } catch (error) {
      return alert(error.message);
    }
  };
};

export default putComment;
