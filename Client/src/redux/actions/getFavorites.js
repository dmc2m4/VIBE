import axios from 'axios';
import types from "./types"
import {API_URL} from "../../config";


export const getFavorites = (email) => {
  console.log(email);
    return async function (dispatch) {
      try {
        const fav = await axios.get(`${API_URL}/favorites/${email}`);
        dispatch({
            type: types.GET_FAVORITES,
            payload: fav.data
        })
      } catch (error) {
        return alert(error.message)
      }
    };
  };

  export default getFavorites;