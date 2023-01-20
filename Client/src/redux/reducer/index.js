import types from "../actions/types";
import { GET_ALL_PRODUCTS} from "../actions/getAllChlotes";
import { DELETE_PRODUCT } from "../actions/deleteProduct";

const initialState = {
  allProducts: [],
  Filters: [],
  Detail: {},
  Favorites: [],
  ShoppingCart: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        filters: action.payload
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        allProducts: [...state.allProducts].filter(product => product.id !== action.payload)
      }
    default:
      return { ...state }
  }
}