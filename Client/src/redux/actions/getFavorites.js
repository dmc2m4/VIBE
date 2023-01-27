import axios from 'axios';
import types from "./types"

const getFavorites = (email) => {
  console.log(email);
    return async function (dispatch) {
      try {
        const fav = await axios.get(`http://localhost:3001/favorites/${email}`);
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