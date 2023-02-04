import types from "./types";
import axios from "axios"; 

export function addToCart(product){
    return{
        type: types.ADD_TO_CART,
        payload: product,
    }
}

export function addOneToCart(payload){
    return {
        type: types.ADD_ONE_TO_CART,
        payload,
    }
}
export function removeFromCart(payload){
    return {
        type: types.REMOVE_ONE_FROM_CART,
        payload,
    }
}
export function clearCart(){
    return {
        type: types.REMOVE_ALL_FROM_CART,
    }
}