import axios from "axios";

export const UPDATE_USER = 'UPDATE_USER';

export const UpdateUserA = (id, payload) => {
    return async function () {
        (await axios.put(`/user/${id}`, payload));
    }
}

