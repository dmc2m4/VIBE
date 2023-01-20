import types from "./types";
import axios from "axios";

const deleteProducts = (product) => {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:3001/product/delete/${product}`);
      dispatch({
        type: types.DELETE_PRODUCT,
        payload: product,
      });
    } catch (error) {
      alert("the activity could not be deleted");
    }
  };
};

export default deleteProducts;
