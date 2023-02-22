import types from "./types";

const getPage = (page) => {
  return function (dispatch) {
    return dispatch({ type: types.SET_CURRENT_PAGE, payload: page });
  };
};

export default getPage;
