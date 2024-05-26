// reducers/index.js
import { combineReducers } from 'redux';
import customerReducer from './customerReducer';

const rootReducer = combineReducers({
  customer: customerReducer,
});

export default rootReducer;
