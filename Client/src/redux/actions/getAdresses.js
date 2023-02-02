import axios from "axios";
import types from "./types";

const getAddresses = (email) => {
  console.log(email);
  return async function (dispatch) {
    await axios
      .get("http://localhost:3001/user/address", email)
      .then((data) => {
        dispatch({ type: types.CREATE_ADDRESSES, payload: data });
      })
      .catch((e) => e.error);
  };
};

export default getAddresses;
