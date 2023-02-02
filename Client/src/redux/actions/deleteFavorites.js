// import axios from 'axios';

// const deleteFavorites = (value) => {
//     return async function () {
//       try {
//          await axios.delete("proyecto-final-vibes-production.up.railway.app/favorites", value);
//       } catch (error) {
//         return alert(error.message)
//       }
//     };
//   };
import { API_URL } from "../../config";

export const deleteFavorites = async (value) => {
  return await fetch(`${API_URL}/favorites`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(value)
  })
}
  
  export default deleteFavorites;