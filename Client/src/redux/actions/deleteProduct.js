import types from "./types";
import axios from "axios";
import {API_URL} from "../../config";

export const deleteProduct = (value) => {
  return async function (dispatch) {
    console.log(value);
    try {
      const prueba = await axios.post(`${API_URL}/product/destroy`, {id :value});
      dispatch({
        type: types.DELETE_PRODUCT,
        payload: value
      })
      return prueba
    } catch (error) {
      return alert("the product couldn`t be deleted"); 
    }
  };
};
