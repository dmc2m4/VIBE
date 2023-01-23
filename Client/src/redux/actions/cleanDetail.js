import types from "./types";

export function cleanDetail(payload) {
  return function (dispatch) {
    dispatch({ 
      type: types.CLEAN_DETAIL, 
      payload 
    });
  };
}