import axios from "axios";
import types from "./types";


const createProdcut = (payload) => {
  console.log(payload);
  return async function (dispatch) {
    const response = await axios
      .post("http://localhost:3001/myaccount/direction/add", payload)
      .then(data => {
        dispatch({type : types.CREATE_ADRESS, payload: data});
      })
      .catch((e) => e.error);
    return response;
  };
};

export default createProdcut;
