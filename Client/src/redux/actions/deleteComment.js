import axios from "axios";
import { API_URL } from "../../config";
import types from "./types";

const deleteComment = (id) => {
  return async function (dispatch) {
    try {
      await axios.post(`${API_URL}/comment/destroy`, {id: id});
      dispatch({ type: types.DELETE_COMMENT, payload: id });
    } catch (error) {
      return alert(error.message);
    }
  };
};

export default deleteComment;
