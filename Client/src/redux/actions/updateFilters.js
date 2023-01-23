import types from "./types";

const updateFilters = (filtereds) => {
  console.log(filtereds);
  return function (dispatch) {
    return dispatch({ type: types.UPDATE_FILTERS, payload: filtereds });
  };
};

export default updateFilters;
