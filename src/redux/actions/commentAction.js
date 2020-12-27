// create comment
export const REQUEST_CREATE_COMMENT = 'REQUEST_COMMENT_POST';
export const CREATE_COMMENT_SUCCESS = `CREATE_COMMENT_SUCCESS`;
export const CREATE_COMMENT_FAIL = `CREATE_COMMENT_FAIL`;

export const requestCreateComment = (data) => ({
  type: REQUEST_COMMENT_POST,
  payload: data,
});

export const createCommentSuccess = (response = null) => {
  return {
    type: CREATE_COMMENT_SUCCESS,
    result: response,
  };
};

export const createCommentFail = (response = null) => {
  return {
    type: CREATE_COMMENT_FAIL,
    error: response,
  };
};
