import types from "./types";
import axios from "axios";
import {API_URL} from "../../config";


export const deleteProduct = (value) => {
  return async function (dispatch) {
    try {
      await axios.post(`${API_URL}/product/destroy`, value);
      dispatch({
        type: types.DELETE_PRODUCT,
        payload: value,
      });
    } catch (error) {
      return alert("the activity couldn`t be deleted"); 
    }
  };
};
