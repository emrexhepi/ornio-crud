import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  ADD_TO_COUNTER
} from '../actions/actionTypes';

const defaultState = {
  counter: 0,
}

const simpleReducer = (state = defaultState, action) => {
  switch(action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      }
    case ADD_TO_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload
      }
    default:
      return state;
  }
}

export default simpleReducer;