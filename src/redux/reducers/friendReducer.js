import {
  GET_LIST_FRIEND_REQUEST_SUCCESS,
  GET_LIST_FRIEND_REQUEST_FAIL,
  UPDATE_STATUS_FRIEND_REQUEST_SUCCESS,
} from '../actions/friendAction';

const friends = (state = null, action) => {
  switch (action.type) {
    case GET_LIST_FRIEND_REQUEST_SUCCESS:
      return {
        ...state,
        result: action.result,
      };
    case GET_LIST_FRIEND_REQUEST_FAIL:
      return {
        ...state,
        result: action.error,
      };
    case UPDATE_STATUS_FRIEND_REQUEST_SUCCESS:
      return {
        ...state,
        dataUpdate: action.result,
      };
    default:
      return state;
  }
};

export default friends;
