import * as types from '../constants/ActionTypes';
import Utils from '../utils';


const initialState = {
    isFetchingHomeList: false,
    isFetchingMoreList:false,
    data: []
}


export default function homeList(state = initialState, action) {
    switch (action.type) {
        case types.START_FETCH_ALL_HOME_LIST:
            return Object.assign({}, state, {isFetchingHomeList: true,isFetchingMoreList:false});
        case types.START_FETCH_MORE_HOME_LIST:
            return Object.assign({}, state, {isFetchingMoreList: true,isFetchingHomeList:false});

        case types.FETCH_ALL_HOME_LIST:

            var data=state.data.concat(action.data)
            var newdata= Object.assign({},{data:data},{isFetchingMoreList: false,isFetchingHomeList:false});
            return newdata;
        case types.RERESH_HOME_LIST:
            if(action.data.length>0){
                var data=action.data.concat(state.data)
                var newdata= Object.assign({},{data:data},{isFetchingMoreList: false,isFetchingHomeList:false});
                return newdata
            }
            var newdata= Object.assign({},{data:state.data},{isFetchingMoreList: false,isFetchingHomeList:false});
            return newdata;

        case types.MORE_HOME_LIST:
            if(action.data.length>0){
                var data=state.data.concat(action.data);
                var newdata= Object.assign({},{data:data},{isFetchingMoreList: false,isFetchingHomeList:false});
                return newdata
            }
            var newdata= Object.assign({},{data:state.data},{isFetchingMoreList: false,isFetchingHomeList:false});
            return newdata;

        default:
            return state
    }
}
