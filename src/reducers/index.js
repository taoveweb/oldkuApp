import { combineReducers } from 'redux';
import navigation from './navigation';
import publish from './pusblish';
import homeList from './homeReducer';

const rootReducer = combineReducers({
  navigation,homeList,publish
});

export default rootReducer;
