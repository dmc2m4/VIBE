import types from "./types";
import axios from "axios";

function getAllChlotes() {
  return async function (dispatch) {
    return await axios
      .get("/products")
      .then((res) => {
        dispatch({ type: types.GET_ALL_CHLOTHES, payload: res.data });
      })
      .catch((e) => e.message);
  };
}

export default getAllChlotes;
