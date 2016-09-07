import * as types from '../constants/ActionTypes';

export function test(index) {
  return {
    type: types.TEST,
    index: index
  }
}
