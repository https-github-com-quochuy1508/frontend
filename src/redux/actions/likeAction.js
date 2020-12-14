// LIKE post
export const REQUEST_LIKE_POST = 'REQUEST_LIKE_POST';
export const LIKE_POST_SUCCESS = `LIKE_POST_SUCCESS`;
export const LIKE_POST_FAIL = `LIKE_POST_FAIL`;
// delete post
export const REQUEST_UNLIKE_POST = 'REQUEST_UNLIKE_POST';
export const UNLIKE_POST_SUCCESS = `UNLIKE_POST_SUCCESS`;
export const UNLIKE_POST_FAIL = `UNLIKE_POST_FAIL`;

export const requestLikePost = (data) => ({
  type: REQUEST_LIKE_POST,
  payload: data,
});

export const likePostSuccess = (response = null) => {
  return {
    type: LIKE_POST_SUCCESS,
    result: response,
  };
};

export const likePostFail = (response = null) => {
  return {
    type: LIKE_POST_FAIL,
    error: response,
  };
};

export const requestUnlikePost = (data) => ({
  type: REQUEST_UNLIKE_POST,
  payload: data,
});

export const unLikePostSuccess = (response = null) => {
  return {
    type: UNLIKE_POST_SUCCESS,
    result: response,
  };
};

export const unLikePostFail = (response = null) => {
  return {
    type: UNLIKE_POST_FAIL,
    error: response,
  };
};