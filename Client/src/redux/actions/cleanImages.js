import types from "./types";

const cleanImages = () => {
  return function (dispatch) {
    dispatch({
      type: types.CLEAN_IMAGES,
    });
  };
};

export default cleanImages;
