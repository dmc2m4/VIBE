import types from "./types";
import axios from "axios";
import {API_URL} from "../../config";


export const deleteProduct = (id) => {
  return async function (dispatch) {
    try {
      await axios.post(`${API_URL}/product/destroy`, {id: id});
      dispatch({
        type: types.DELETE_PRODUCT,
        payload: id,
      });
    } catch (error) {
      return alert("the product couldn`t be deleted"); 
    }
  };
};
