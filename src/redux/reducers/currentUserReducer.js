import {
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAIL,
  CHANGE_USER_SUCCESS,
  CHANGE_USER_FAIL,
} from '../actions/userAction';

const register = (state = null, action) => {
  // console.log('action: ', action);
  switch (action.type) {
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        result: action.result,
      };
    case GET_CURRENT_USER_FAIL:
      return {
        ...state,
        result: null,
      };
    case CHANGE_USER_SUCCESS:
      return {
        ...state,
        resultChange: action.result,
      };
    case CHANGE_USER_FAIL:
      return {
        ...state,
        resultChange: null,
      };
    default:
      return state;
  }
};

export default register;
