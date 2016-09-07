import { combineReducers } from 'redux';
import navigation from './navigation';
import todos from './todos';
import abc from './test';

const rootReducer = combineReducers({
  navigation, todos,abc
});

export default rootReducer;
