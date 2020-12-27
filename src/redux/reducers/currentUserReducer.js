import {
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAIL,
} from '../actions/userAction';

const register = (state = null, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        result: action.result,
      };
    case GET_CURRENT_USER_FAIL:
      return {
        ...state,
        result: {},
      };
    default:
      return state;
  }
};

export default register;
