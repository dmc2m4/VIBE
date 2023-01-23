import types from "./types";

export function getAllClothes() {
  return function (dispatch) {
    return fetch(`http://localhost:3001/product`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: types.GET_ALL_CLOTHES,
          payload: data,
        });
      })
      .catch((e) => e.error);
  };
}
