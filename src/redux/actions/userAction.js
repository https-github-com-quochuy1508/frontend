export const REQUEST_GET_CURRENT_USER = 'REQUEST_GET_CURRENT_USER';
export const GET_CURRENT_USER_SUCCESS = `GET_CURRENT_USER_SUCCESS`;
export const GET_CURRENT_USER_FAIL = `GET_CURRENT_USER_FAIL`;
export const REQUEST_CHANGE_USER = 'REQUEST_CHANGE_USER';
export const CHANGE_USER_SUCCESS = `CHANGE_USER_SUCCESS`;
export const CHANGE_USER_FAIL = `CHANGE_USER_FAIL`;

export const requestGetCurrentUser = () => ({
  type: REQUEST_GET_CURRENT_USER,
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

export const requestChangeUser = (data) => ({
  type: REQUEST_CHANGE_USER,
  payload: data,
});

export const changeUserSuccess = (response = null) => {
  return {
    type: CHANGE_USER_SUCCESS,
    result: response,
  };
};

export const changeUserFail = (response = null) => {
  return {
    type: CHANGE_USER_FAIL,
    error: response,
  };
};
