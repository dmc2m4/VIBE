import types from "./types";
import axios from "axios";

const getPage = (page, info) => {
  return async function (dispatch) {
    await axios
      .post("proyecto-final-vibes-production.up.railway.app/pagination", { page: page, info: info })
      .then((res) => dispatch({ type: types.GET_PAGE, payload: res.data }))
      .catch((e) => e.error);
  };
};

export default getPage;
