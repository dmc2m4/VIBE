import types from "./types";

const stopLoading = () => {
  return function (dispatch) {
    dispatch({
      type: types.STOP_LOADING,
    });
  };
};

export default stopLoading;
