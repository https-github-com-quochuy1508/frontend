import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import postReducer from './postReducer';
import postsReducer from './postsReducer';
import countReducer from './countReducer';
import friendReducer from './friendReducer';
import currentUserReducer from './currentUserReducer';
import searchReducer from './searchReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
  users: loginReducer,
  register: signupReducer,
  posts: postsReducer,
  post: postReducer,
  count: countReducer,
  friend: friendReducer,
  currentUser: currentUserReducer,
  search: searchReducer,
  comments: commentReducer,
});
export default rootReducer;
