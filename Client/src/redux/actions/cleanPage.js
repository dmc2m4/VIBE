import types from "./types";

const cleanPage = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: types.CLEAN_PAGE,
      payload,
    });
  };
};

export default cleanPage;
