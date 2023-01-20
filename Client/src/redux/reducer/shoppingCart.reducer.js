import types from "../actions/types";

export const shoppingCartInitialState = {
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
  ],
  cart: [],
};

export function shoppingCartReducer(state, action) {
  if (types.ADD_TO_CART) {
  }
  if (types.REMOVE_ONE_FROM_CART) {
  }
  if (types.REMOVE_ALL_FROM_CART) {
  }
  if (types.CLEAR_CART) {
  }
  return state;
}
