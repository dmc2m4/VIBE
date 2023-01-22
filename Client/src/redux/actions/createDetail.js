import axios from "axios";
import types from "./types";

const createDetail = (id) => {
  return async function (dispatch) {
    await axios
      .get(`http://localhost:3001/product/${id}`)
      .then((data) => {
        dispatch({ type: types.PRODUCT_DETAIL, payload: data.data });
      })
      .catch((e) => e.error);
  };
};

export default createDetail;
