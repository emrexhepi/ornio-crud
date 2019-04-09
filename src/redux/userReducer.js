
import {
  SET_TOKEN
} from './../actions/actionTypes';
import { stat } from 'fs';

const defaultState = {
  details: {},
  token: null
}

const simpleReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_TOKEN:
      return {
        ...stat,
        token: action.payload
      };
    default:
      return state;
  }
}

export default simpleReducer;