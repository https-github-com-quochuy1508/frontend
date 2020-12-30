import {
  GET_LIST_FRIEND_REQUEST_SUCCESS,
  GET_LIST_FRIEND_REQUEST_FAIL,
  UPDATE_STATUS_FRIEND_REQUEST_SUCCESS,
} from '../actions/friendAction';
import {
  GET_INFO_FRIEND_SUCCESS,
  GET_INFO_FRIEND_FAIL,
} from '../actions/userAction';
const friends = (state = null, action) => {
  // console.log('action: ', action);
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
    case GET_INFO_FRIEND_SUCCESS:
      return {
        ...state,
        infoFriends: action.result,
      };
    case GET_INFO_FRIEND_FAIL:
      return {
        ...state,
        infoFriends: null,
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
