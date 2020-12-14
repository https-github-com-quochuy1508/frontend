import {COUNT_POST_SUCCESS, COUNT_POST_FAIL} from '../actions/postAction';

const register = (state = null, action) => {
  switch (action.type) {
    case COUNT_POST_SUCCESS:
      return {
        ...state,
        result: action.result,
      };
    case COUNT_POST_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default register;
