import {
  SET_EVENTS_TYPES, SET_EVENTS_METHODS, SET_EVENTS
} from '../actions/actionTypes';

const defaultState = {
  list: null,
  eventTypes: [],
  eventMethods: []
}

const alertsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_EVENTS_TYPES:
      return {
        ...state,
        eventTypes: action.payload
      };
    case SET_EVENTS_METHODS:
      return {
        ...state,
        eventMethods: action.payload
      }
    case SET_EVENTS:
      return {
        ...state,
        list: action.payload
      }
    default:
      return state;
  }
}

export default alertsReducer;