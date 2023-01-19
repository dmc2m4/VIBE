import types from "../actions/types";

const initialState = {
  Chlotes: [],
  Filters: [],
  Detail: {},
  Favorites: [],
  ShoppingCart: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === types.GET_ALL_CHLOTHES) {
    return { ...state, Chlotes: action.payload };
  }
  return { ...state };
}

export default rootReducer;
