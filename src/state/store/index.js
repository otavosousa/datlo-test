import { createStore, combineReducers } from 'redux';
import coordinatesReducer from '../reducer/coordinatesReducer';
import polygonReducer from '../reducer/polygonReducer'
import loadingReducer from '../reducer/loadingReducer'

const reducers = combineReducers({
  coordinatesReducer,
  polygonReducer,
  loadingReducer
});

const store = createStore(reducers);

export default store;
