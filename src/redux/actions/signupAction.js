export const REQUEST_CREATE_USER = 'REQUEST_CREATE_USER';
export const PROCESSING_CREATE_USER = 'PROCESSING_CREATE_USER';
export const CREATING = `CREATING`;
export const CREATED = `CREATED`;
export const FAIL_CREATED = `FAIL_CREATED`;

export const requestCreateUser = (data) => ({
  type: REQUEST_CREATE_USER,
  payload: data,
});

export const signupSuccess = (response = null) => {
  return {
    type: CREATED,
    result: response,
  };
};

export const signupFail = (response = null) => {
  return {
    type: FAIL_CREATED,
    error: response,
  };
};

