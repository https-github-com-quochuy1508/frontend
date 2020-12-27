import {SEARCH_POST_SUCCESS, SEARCH_POST_FAIL} from '../actions/searchAction';

const search = (state = null, action) => {
  switch (action.type) {
    case SEARCH_POST_SUCCESS:
      return {
        ...state,
        result: action.result,
      };
    case SEARCH_POST_FAIL:
      return {
        ...state,
        result: [],
      };
    default:
      return state;
  }
};

export default search;
