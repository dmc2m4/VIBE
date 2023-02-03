import types from "./types";

const cleanDetail = (payload) => {
  return function (dispatch) {
    dispatch({
      type: types.CLEAN_DETAIL,
      payload,
    });
  };
};

export default cleanDetail;
