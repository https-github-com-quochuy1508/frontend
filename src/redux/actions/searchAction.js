export const REQUEST_SEARCH_POST = 'REQUEST_SEARCH_POST';
export const SEARCH_POST_SUCCESS = `SEARCH_POST_SUCCESS`;
export const SEARCH_POST_FAIL = `SEARCH_POST_FAIL`;

export const requestSearchPost = (content) => ({
  type: REQUEST_SEARCH_POST,
  payload: content,
});

export const searchPostSuccess = (response = null) => {
  return {
    type: SEARCH_POST_SUCCESS,
    result: response,
  };
};

export const searchPostFail = (response = null) => {
  return {
    type: SEARCH_POST_FAIL,
    error: response,
  };
};
