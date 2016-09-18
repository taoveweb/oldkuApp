import { combineReducers } from 'redux';
import navigation from './navigation';
import homeList from './homeReducer';

const rootReducer = combineReducers({
  navigation,homeList
});

export default rootReducer;
