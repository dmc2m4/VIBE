import {API_URL} from "../../config";
import axios from 'axios';

// export const deleteFavorites = async (value) => {
//   return await fetch(`${API_URL}/favorites`, {
//     method: 'DELETE',
//     headers: {'Content-Type': 'application/json'},
//     body: value
//   })
// }

const deleteFavorites = (value) => {
  return async function () {
    try {
       await axios.post(`${API_URL}/favorites/delete`, value);
    } catch (error) {
      return alert(error.message)
    }
  };
};

  
export default deleteFavorites;


 