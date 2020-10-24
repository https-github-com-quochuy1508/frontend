import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

const rootReducer = combineReducers({
  users: loginReducer,
  register: signupReducer,
});
export default rootReducer;
