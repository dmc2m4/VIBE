import types from "./types"

export const searchProducts = (name) => {
    return {
            type: types.SEARCH_PRODUCTS,
            payload: name
        }
    }

