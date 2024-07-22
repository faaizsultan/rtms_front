import { combineReducers } from 'redux';
import  loginReducers  from './loginStateReducer';
import  companyDataReducers  from './companyStateReducer';

// Combine all reducers into a single root reducer
const rootReducers = combineReducers({
  loginState: loginReducers,
  companyDataState : companyDataReducers
  // Add other reducers here if you have more in the future
});

export default rootReducers;
