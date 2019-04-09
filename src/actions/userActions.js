import axios from '../axios';

import {
  SET_USER,
  SET_TOKEN
} from './actionTypes';

export const initUser = () => (dispatch) => {
  // get user from storage
  if(
      localStorage.getItem('token') !== null
      || localStorage.getItem('token') !== undefined
    ) {
    dispatch({
      type: SET_TOKEN,
      payload: localStorage.getItem('token')
    });
  }
}

export const getMe = (callback = null) => async function (dispatch) {
  try {
    const response = await axios.get('/users/me');

    dispatch({
      type: SET_USER,
      payload: response.data
    });
  } catch (e) {
    console.error(e);
    if(callback) {
      callback();
    }
  }
}

export const login = (email, password, callback) => async function (dispatch) {
  try {
    const response = await axios.post('/auth/login', {
      email,
      password
    });

    localStorage.setItem('token', response.data.token);

    dispatch({
      type: SET_TOKEN,
      payload: response.data.token
    });
  } catch (e) {
    callback();
  }
}