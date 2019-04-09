import axios from '../axios';

import {
  SET_EVENTS_TYPES,
  SET_EVENTS_METHODS,
  SET_EVENTS
} from './actionTypes';

export const getEventTypes = (callback = null) => async function (dispatch) {
  try {
    const response = await axios.get('/alert-events');
    dispatch({
      type: SET_EVENTS_TYPES,
      payload: response.data
    });
  } catch (e) {
    console.error(e);
    if(callback) {
      callback();
    }
  }
}

export const getEventMethods = (callback = null) => async function (dispatch) {
  try {
    const response = await axios.get('/alert-methods');
    dispatch({
      type: SET_EVENTS_METHODS,
      payload: response.data
    });
  } catch (e) {
    console.error(e);
    if(callback) {
      callback();
    }
  }
}

export const getAllEvents = (callback = null) => async function (dispatch) {
  try {
    const response = await axios.get('/alerts');
    dispatch({
      type: SET_EVENTS,
      payload: response.data
    });
  } catch (e) {
    console.error(e);
    if(callback) {
      callback();
    }
  }
}

export const createEvent = (event, callback = null ) => async function (dispatch) {
  try {
    await axios.post('/alerts', event);
    callback({
      success: true
    })
  } catch (e) {
    console.error(e);
    if(callback) {
      callback({
        success: false
      })
    }
  }
}