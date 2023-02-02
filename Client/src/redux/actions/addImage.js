import types from "./types";

const addImage = (payload) => {
  return function (dispatch) {
    dispatch({
      type: types.ADD_IMAGE,
      payload,
    });
  };
};

export default addImage;
