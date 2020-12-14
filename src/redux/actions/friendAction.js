// GET LIST FRIEND REQUEST
export const GET_LIST_FRIEND_REQUEST = 'GET_LIST_FRIEND_REQUEST';
export const GET_LIST_FRIEND_REQUEST_SUCCESS = `GET_LIST_FRIEND_REQUEST_SUCCESS`;
export const GET_LIST_FRIEND_REQUEST_FAIL = `GET_LIST_FRIEND_REQUEST_FAIL`;

export const requestListFriendRequest = (data) => ({
  type: GET_LIST_FRIEND_REQUEST,
  payload: data,
});

export const getListFriendRequestSuccess = (response = null) => {
  return {
    type: GET_LIST_FRIEND_REQUEST_SUCCESS,
    result: response,
  };
};

export const getListFriendRequestFail = (response = null) => {
  return {
    type: GET_LIST_FRIEND_REQUEST_FAIL,
    error: response,
  };
};
