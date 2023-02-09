import axios from "axios";
import { API_URL } from "../../config";

const setFavorites = (value) => {
  return async function () {
    try {
      await axios.post(`${API_URL}/favorites`, value);
    } catch (error) {
      return alert(error.message);
    }
  };
};

export default setFavorites;
