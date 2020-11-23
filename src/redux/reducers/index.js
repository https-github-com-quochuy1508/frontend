import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  users: loginReducer,
  register: signupReducer,
  post: postReducer,
});
export default rootReducer;
