import types from "./types"

export const cleanPage = (payload) => {
    return function (dispatch){
        return dispatch ({
            type: types.CLEAN_PAGE,
            payload
        })
    }
}

