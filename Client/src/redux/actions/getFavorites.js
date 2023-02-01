import axios from 'axios';
import types from "./types"

export const getFavorites = (email) => {
  console.log(email);
    return async function (dispatch) {
      try {
        const fav = await axios.get(`proyecto-final-vibes-production.up.railway.app/favorites/${email}`);
        dispatch({
            type: types.GET_FAVORITES,
            payload: fav
        })
      } catch (error) {
        return alert(error.message)
      }
    };
  };

  export default getFavorites;