import {CREATE_POST_FAIL, CREATE_POST_SUCCESS} from '../actions/postAction';

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
    default:
      return state;
  }
};

export default register;
