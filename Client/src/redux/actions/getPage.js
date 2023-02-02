import types from "./types";
import axios from "axios";
import { API_URL } from "../../config";

const getPage = (page, info) => {
  console.log(page);
  return async function (dispatch) {
    await fetch(`${API_URL}/pagination`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({page: page, info: info})
    })
      .then((res) => dispatch({ type: types.GET_PAGE, payload: res.data }))
      .catch((e) => e.error);
  };
};

export default getPage;
