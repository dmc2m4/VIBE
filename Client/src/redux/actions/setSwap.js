import types from "./types";

const setSwap = () => {
  return function (dispatch) {
    return dispatch({ 
        type: types.SWAP });
  };
};

export default setSwap;
