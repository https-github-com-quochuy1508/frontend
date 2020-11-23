// authentication
export const REQUEST_CREATE_POST = 'REQUEST_CREATE_POST';
export const CREATE_POST_SUCCESS = `CREATE_POST_SUCCESS`;
export const CREATE_POST_FAIL = `CREATE_POST_FAIL`;

export const requestCreatePost = (data) => ({
  type: REQUEST_CREATE_POST,
  payload: data,
});

export const createPostSuccess = (response = null) => {
  return {
    type: CREATE_POST_SUCCESS,
    result: response,
  };
};

export const createPostFail = (response = null) => {
  return {
    type: CREATE_POST_FAIL,
    error: response,
  };
};
