
import {
  SET_TOKEN, SET_USER
} from './../actions/actionTypes';

const defaultState = {
  details: null,
  token: null
}

const simpleReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case SET_USER:
      return {
        ...state,
        details: action.payload
      }
    default:
      return state;
  }
}

export default simpleReducer;