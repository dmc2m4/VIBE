import types from "./types";
import axios from "axios";

const getPage = (page) => {
  return async function (dispatch) {
    return dispatch({ type: types.SET_CURRENT_PAGE, payload: page });
  };
};

export default getPage;
