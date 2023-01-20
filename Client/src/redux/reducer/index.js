import types from "../actions/types";
// import { GET_ALL_PRODUCTS } from "../actions/getAllChlotes";
// import { DELETE_PRODUCT } from "../actions/deleteProducts";

const initialState = {
  Products: [],
  Filters: [],
  Detail: {},
  Favorites: [],
  ShoppingCart: [],
};

export default function rootReducer(state = initialState, action) {
  if (action.type === types.GET_ALL_PRODUCTS) {
    return {
      ...state,
      Products: action.payload,
      Filters: action.payload,
    };
  }
  if (action.type === types.DELETE_PRODUCT) {
    return {
      ...state,
      Products: [...state.Products].filter(
        (product) => product.id !== action.payload
      ),
    };
  }
  return { ...state };
}
