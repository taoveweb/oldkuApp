import * as types from '../constants/ActionTypes';

export default function (state = {imgs: []}, action) {
    switch (action.type) {
        case types.PUBLISH:
            return {imgs: action.imgs};
        case types.PUBLSIH_SELECT_IMAGES:
            return {imgs: action.imgs};
        default:
            return state
    }
}
