import * as types from '../constants/ActionTypes';

export default function(state = {index: 0}, action) {
  switch(action.type) {
    case types.PERSONAL:
      return {...state, index: action.index};
  }

  return state;
}
