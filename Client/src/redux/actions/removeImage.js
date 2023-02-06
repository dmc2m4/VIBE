import types from "./types";

const removeImage = (payload) => {
  return function (dispatch) {
    dispatch({
      type: types.REMOVE_IMAGE,
      payload,
    });
  };
};

export default removeImage;
