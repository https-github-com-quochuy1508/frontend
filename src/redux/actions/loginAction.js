// authentication
export const REQUEST_AUTHENTICATE_USER = 'REQUEST_AUTHENTICATE_USER';
export const PROCESSING_AUTHENTICATE_USER = 'PROCESSING_AUTHENTICATE_USER';
export const AUTHENTICATING = `AUTHENTICATING`;
export const AUTHENTICATED = `AUTHENTICATED`;
export const NOT_AUTHENTICATED = `NOT_AUTHENTICATED`;
export const LOG_OUT = `LOG_OUT`;

export const requestAuthenticateUser = (data) => ({
  type: REQUEST_AUTHENTICATE_USER,
  payload: data,
});

export const authenticateSuccess = (response = null) => {
  return {
    type: AUTHENTICATED,
    result: response,
  };
};

export const authenticateFail = (response = null) => {
  return {
    type: NOT_AUTHENTICATED,
    error: response,
  };
};

export const logOut = () => ({
  type: LOG_OUT,
});
