import {
  CREATED,
  FAIL_CREATED,
} from '../actions/signupAction';

const signup = (state = null, action) => {
  switch (action.type) {
    case CREATED:
      return {
        ...state,
        result: action.result,
      };
    case FAIL_CREATED:
      return {
        ...state,
        result: action.error,
      };
    default:
      return state;
  }
};

export default signup;
