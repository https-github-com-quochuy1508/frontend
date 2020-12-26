export const REQUEST_GET_CURRENT_USER = 'REQUEST_GET_CURRENT_USER';
export const GET_CURRENT_USER_SUCCESS = `GET_CURRENT_USER_SUCCESS`;
export const GET_CURRENT_USER_FAIL = `GET_CURRENT_USER_FAIL`;

export const requestGetCurrentUser = (id) => ({
  type: REQUEST_GET_CURRENT_USER,
  payload: id,
});

export const getCurrentUserSuccess = (response = null) => {
  return {
    type: GET_CURRENT_USER_SUCCESS,
    result: response,
  };
};

export const getCurrentUserFail = (response = null) => {
  return {
    type: GET_CURRENT_USER_FAIL,
    error: response,
  };
};
