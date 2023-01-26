import types from "./types";

const getPage = (page) => {
  return function (dispatch) {
    return dispatch({ type: types.SET_CURRENT_PAGE, payload: page });
  };
};

// export function clearDetail(payload) {
//   return function (dispatch) {
//     dispatch({ type: CLEAR_DETAIL, payload });
//   };
// }

export default getPage;
