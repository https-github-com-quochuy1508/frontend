import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL
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

    case DELETE_POST_SUCCESS:
      let postId = action.result;
      let postList = state.result.result.list;

      for (let i = postList.length - 1; i >= 0; i--) {
        if (postList[i].id === postId) {
          newList = postList.splice(i, 1);
        }
      }

      let result = {
        list: newList
      }
      return {
        ...state,
        result: result,
      };
    case DELETE_POST_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default register;
