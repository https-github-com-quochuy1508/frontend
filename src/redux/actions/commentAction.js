// create comment
export const REQUEST_CREATE_COMMENT = 'REQUEST_COMMENT_POST';
export const CREATE_COMMENT_SUCCESS = `CREATE_COMMENT_SUCCESS`;
export const CREATE_COMMENT_FAIL = `CREATE_COMMENT_FAIL`;

// get comments
export const REQUEST_GET_COMMENTS = 'REQUEST_GET_COMMENTS';
export const GET_COMMENTS_SUCCESS = `GET_COMMENTS_SUCCESS`;
export const GET_COMMENTS_FAIL = `GET_COMMENTS_FAIL`;

export const requestCreateComment = (data) => ({
  type: REQUEST_CREATE_COMMENT,
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

export const requestGetComments = (data) => ({
  type: REQUEST_GET_COMMENTS,
  payload: data,
});

export const getCommentsSuccess = (response = null) => {
  return {
    type: GET_COMMENTS_SUCCESS,
    result: response,
  };
};

export const getCommentsFail = (response = null) => {
  return {
    type: GET_COMMENTS_FAIL,
    error: response,
  };
};