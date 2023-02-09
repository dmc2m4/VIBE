import axios from "axios";

export const USERS = 'USERS';
export const FILTER_ADMIN = 'FILTER_ADMIN';
export const FILTER_BANNED = 'FILTER_BANNED';


export const DashboardUsersA = () => {
    return async function (dispatch) {
        var json = await axios.get('/user');

        return dispatch({
            type: USERS,
            payload: json.data,

        })
    }
}

export const filterAdmin = () => {
    return async function (dispatch) {
        var json = await axios.get('/user/admin');

        return dispatch({
            type: FILTER_ADMIN,
            payload: json.data,

        })
    }
}

export const filterBanned = () => {
    return async function (dispatch) {
        var json = await axios.get('/user/banned');

        return dispatch({
            type: FILTER_BANNED,
            payload: json.data,

        })
    }
}






