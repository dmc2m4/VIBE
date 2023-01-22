import axios from "axios"
import types from "./types";

const createDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/product/${id}`);
    dispatch ({type: types.PRODUCT_DETAIL, payload: response})
  }
}

export default createDetail
