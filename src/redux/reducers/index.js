import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import postReducer from './postReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  users: loginReducer,
  register: signupReducer,
  posts: postsReducer,
  post: postReducer,
});
export default rootReducer;
