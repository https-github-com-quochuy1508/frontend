import {
  CREATE_POST_FAIL,
  CREATE_POST_SUCCESS,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAIL,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
} from '../actions/postAction';

const register = (state = null, action) => {
  switch (action.type) {
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        result: action.result,
      };
    case CREATE_POST_FAIL:
      return {
        ...state,
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        result: action.result,
      };
    case UPDATE_POST_FAIL:
      return {
        ...state,
      };
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
