import axios from "axios";
import types from "./types";

const createDetail = (id) => {
  return async function (dispatch) {
    await axios
      .get(`proyecto-final-vibes-production.up.railway.app/product/${id}`)
      .then((data) => {
        dispatch({ type: types.PRODUCT_DETAIL, payload: data.data });
      })
      .catch((e) => e.error);
  };
};

export default createDetail;
