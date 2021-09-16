import { createStore, combineReducers } from 'redux';
import addItemReducer from '../reducer/addItemReducer';

const reducers = combineReducers({
  addItemReducer,
});

const store = createStore(reducers);

export default store;
