import {
  AUTHENTICATED,
  NOT_AUTHENTICATED,
  LOG_OUT,
} from '../actions/loginAction';

const users = (state = null, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        result: action.result,
      };
    case NOT_AUTHENTICATED:
      return {
        ...state,
        result: action.error,
      };
    case LOG_OUT:
      return {
        ...state,
        result: null,
      }
    default:
      return state;
  }
};

export default users;
