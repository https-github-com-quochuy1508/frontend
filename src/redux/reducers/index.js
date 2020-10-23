import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

const rootReducer = combineReducers({
  users: loginReducer,
  is: signupReducer,
});
export default rootReducer;
