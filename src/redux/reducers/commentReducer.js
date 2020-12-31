import {
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAIL,

    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAIL,
  } from '../actions/commentAction';
  
  const register = (state = null, action) => {
    switch (action.type) {
      case GET_COMMENTS_SUCCESS:
        return {
          ...state,
          result: action.result.rows,
        };
      case GET_COMMENTS_FAIL:
        return {
          ...state,
        };

      case CREATE_COMMENT_SUCCESS:
          // console.log("Okkkkkkkkkkkkkkkkkkkkkkkkkkkkkk ", action.result.result);
          let oldList = state.result;
        return {
          ...state,
          result: [...oldList, action.result.result],
        };
      case CREATE_COMMENT_FAIL:
        return {
          ...state,
        };

      default:
        return state;
    }
  };
  
  export default register;
  