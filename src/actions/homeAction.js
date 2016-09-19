import * as types from '../constants/ActionTypes';
import * as APIs from '../constants/ServerAPIs';


function shouldFetchHomeList(state) {
    const data = state.homeList;
    if (data && data.isFetchingHomeList) {
        return false
    }
    return true;
}

function shouldFetchMoreHomeList(state) {
    const data = state.homeList;
    if (data && data.isFetchingMoreList) {
        return false
    }
    return true;
}
//首次获取列表
export function fetchAllHomeList() {

    return async (dispatch, getState) => {
        //verify
        if (!shouldFetchHomeList(getState())) {
            return Promise.resolve();
        }

        //dispatch start fetch action
        dispatch({type: types.START_FETCH_ALL_HOME_LIST});

        //fetching
        const response = await fetch(APIs.homeList);
        //response
        const data = await response.json();

        //dispatch end fetch action
        return dispatch({
            type: types.FETCH_ALL_HOME_LIST,
            data
        });
    }
}



//刷新获取
export function fetchRefreshHomeList() {

    return async (dispatch, getState) => {
        //verify
        if (!shouldFetchHomeList(getState())) {
            return Promise.resolve();
        }

        //dispatch start fetch action
        dispatch({type: types.START_FETCH_ALL_HOME_LIST});

        //fetching
        var olddata=getState().homeList.data;
        if(olddata.length==0){
            return Promise.resolve();
        }
        const response = await fetch(APIs.homeList+"?type=refresh&created="+olddata[0].created);
        //response
        const data = await response.json();
        //dispatch end fetch action
        return dispatch({
            type: types.RERESH_HOME_LIST,
            data
        });
    }
}

//获取更多
export function fetchMoreHomeList() {

    return async (dispatch, getState) => {
        //verify
        if (!shouldFetchMoreHomeList(getState())) {
            return Promise.resolve();
        }

        //dispatch start fetch action
        dispatch({type: types.START_FETCH_MORE_HOME_LIST});

        //fetching
        var olddata=getState().homeList.data;
        if(olddata.length==0){
            return Promise.resolve();
        }
        const response = await fetch(APIs.homeList+"?type=more&created="+olddata[olddata.length-1].created);
        //response
        const data = await response.json();
        //dispatch end fetch action注意 加载太快刷新组件有bug
        return dispatch({
            type: types.MORE_HOME_LIST,
            data
        });

    }
}








