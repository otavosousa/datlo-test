import { createStore, combineReducers } from 'redux';
import addItemReducer from '../reducer/addItemReducer';
import coordinatesReducer from '../reducer/coordinatesReducer';

const reducers = combineReducers({
  addItemReducer,
  coordinatesReducer,
});

const store = createStore(reducers);

export default store;
