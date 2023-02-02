import types from "./types";

const setLoading = () => {
  return function (dispatch) {
    dispatch({
      type: types.SET_LOADING,
    });
  };
};

export default setLoading;
