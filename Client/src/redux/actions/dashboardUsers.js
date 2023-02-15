import axios from "axios";
import types from "./types";
import { API_URL } from "../../config";

export const Users = () => {
  return async function (dispatch) {
    const result = await axios.get(`${API_URL}/user`);

    return dispatch({
      type: types.USERS,
      payload: result.data,
    });
  };
};

export const filterAdmin = () => {
  return async function (dispatch) {
    const result = await axios.get(`${API_URL}/user/admin`);

    return dispatch({
      type: types.FILTER_ADMIN,
      payload: result.data,
    });
  };
};

export const filterBanned = () => {
  return async function (dispatch) {
    const result = await axios.get(`${API_URL}/user/banned`);

    return dispatch({
      type: types.FILTER_BANNED,
      payload: result.data,
    });
  };
};

export const switchBan = (id) => {
  return async function (dispatch) {
    const result = await axios.put(`${API_URL}/user/switchBan`, {
      id: id,
    });

    return dispatch({
      type: types.SWAP,
    });
  };
};

export const switchAdmin = (id) => {
  return async function (dispatch) {
    const result = await axios.put(`${API_URL}/user/switchAdmin`, {
      id: id,
    });

    return dispatch({
      type: types.SWAP,
    });
  };
};
