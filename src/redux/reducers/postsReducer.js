import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
} from '../actions/postAction';

const register = (state = null, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        result: action.result,
      };
    case GET_POSTS_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default register;
