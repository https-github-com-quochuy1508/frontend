// GET LIST FRIEND REQUEST
export const GET_LIST_FRIEND_REQUEST = 'GET_LIST_FRIEND_REQUEST';
export const GET_LIST_FRIEND_REQUEST_SUCCESS = `GET_LIST_FRIEND_REQUEST_SUCCESS`;
export const GET_LIST_FRIEND_REQUEST_FAIL = `GET_LIST_FRIEND_REQUEST_FAIL`;
// UPDATE STATUS FRIEND REQUEST
export const UPDATE_STATUS_FRIEND_REQUEST = 'UPDATE_STATUS_FRIEND_REQUEST';
export const UPDATE_STATUS_FRIEND_REQUEST_SUCCESS = `UPDATE_STATUS_FRIEND_REQUEST_SUCCESS`;
export const UPDATE_STATUS_FRIEND_REQUEST_FAIL = `UPDATE_STATUS_FRIEND_REQUEST_FAIL`;

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

export const updateStatusFriendRequest = (data) => ({
  type: UPDATE_STATUS_FRIEND_REQUEST,
  payload: data,
});

export const updateStatusFriendSuccess = (response = null) => {
  return {
    type: UPDATE_STATUS_FRIEND_REQUEST_SUCCESS,
    result: response,
  };
};

export const updateStatusFriendFail = (response = null) => {
  return {
    type: UPDATE_STATUS_FRIEND_REQUEST_FAIL,
    error: response,
  };
};
