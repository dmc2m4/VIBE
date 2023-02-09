import {API_URL} from "../../config";
import axios from 'axios';

const deleteFavorites = (value) => {
  return async function () {
    try {
       await axios.post(`${API_URL}/favorites`, value);
    } catch (error) {
      return alert(error.message)
    }
  };
};

  
export default deleteFavorites;


 