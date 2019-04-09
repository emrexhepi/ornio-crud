import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  ADD_TO_COUNTER
} from './actionTypes';

export const increaseCounter = () => (dispatch)=> {
  dispatch({
    type: INCREASE_COUNTER
  })
}

export const decreaseCounter = () => (dispatch)=> {
  dispatch({
    type: DECREASE_COUNTER
  })
}

export const addToCounter = (amoun) => (dispatch) => {
  dispatch({
    type: ADD_TO_COUNTER,
    payload: amoun
  })
}