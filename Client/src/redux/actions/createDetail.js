import axios from "axios";
import types from "./types";
import { API_URL } from "../../config";

const createDetail = (id) => {
  return async function (dispatch) {
    await axios
      .get(`${API_URL}/product/${id}`)
      .then((data) => {
        dispatch({ type: types.PRODUCT_DETAIL, payload: data.data });
      })
      .catch((e) => e.error);
  };
};

export default createDetail;
