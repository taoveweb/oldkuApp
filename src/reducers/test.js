import * as types from '../constants/ActionTypes';

export default function(state = {index: 0}, action) {
  switch(action.type) {
    case types.TEST:
      return {...state, index: action.index};
  }

  return state;
}
