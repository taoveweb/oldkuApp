import * as types from '../constants/ActionTypes';

export function test(imgs) {
    return {
        type: types.PUBLISH,
        imgs
    }
}

export function publishSelectImages(imgs) {
    return {
        type: types.PUBLSIH_SELECT_IMAGES,
        imgs
    }
}
