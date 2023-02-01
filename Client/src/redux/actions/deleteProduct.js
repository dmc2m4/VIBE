// export const DELETE_PRODUCT = "DELETE_PRODUCT";
import types from "./types";
import axios from "axios";
import { API_URL } from "../../config";

export const deleteProduct = (product) => {
  return async function (dispatch) {
    try {
      await axios.delete(`${API_URL}/product/delete/${product}`);
      dispatch({
        type: types.DELETE_PRODUCT,
        payload: product,
      });
    } catch (error) {
      alert("the activity couldn`t be deleted"); 
    }
  };
};
