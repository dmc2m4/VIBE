import types from "./types";

const isfav = (value) => {
  return function (dispatch) {
    return dispatch({ 
        type: types.IS_FAV, 
        payload: value });
  };
};

export default isfav;