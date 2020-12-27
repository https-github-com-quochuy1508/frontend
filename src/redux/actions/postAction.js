// create post
export const REQUEST_CREATE_POST = 'REQUEST_CREATE_POST';
export const CREATE_POST_SUCCESS = `CREATE_POST_SUCCESS`;
export const CREATE_POST_FAIL = `CREATE_POST_FAIL`;

// get posts
export const REQUEST_GET_POSTS = 'REQUEST_GET_POSTS';
export const GET_POSTS_SUCCESS = `GET_POSTS_SUCCESS`;
export const GET_POSTS_FAIL = `GET_POSTS_FAIL`;

// update post
export const REQUEST_UPDATE_POST = 'REQUEST_UPDATE_POST';
export const UPDATE_POST_SUCCESS = `UPDATE_POST_SUCCESS`;
export const UPDATE_POST_FAIL = `UPDATE_POST_FAIL`;

// delete post
export const REQUEST_DELETE_POST = 'REQUEST_DELETE_POST';
export const DELETE_POST_SUCCESS = `DELETE_POST_SUCCESS`;
export const DELETE_POST_FAIL = `DELETE_POST_FAIL`;

// count like comment isLike post
export const REQUEST_COUNT_POST = 'REQUEST_COUNT_POST';
export const COUNT_POST_SUCCESS = `COUNT_POST_SUCCESS`;
export const COUNT_POST_FAIL = `COUNT_POST_FAIL`;

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

export const requestUpdatePost = (data) => ({
  type: REQUEST_UPDATE_POST,
  payload: data,
});

export const updatePostSuccess = (response = null) => {
  return {
    type: UPDATE_POST_SUCCESS,
    result: response,
  };
};

export const updatePostFail = (response = null) => {
  return {
    type: UPDATE_POST_FAIL,
    error: response,
  };
};

export const requestGetPosts = (data) => ({
  type: REQUEST_GET_POSTS,
  payload: data,
});

export const getPostsSuccess = (response = null) => {
  return {
    type: GET_POSTS_SUCCESS,
    result: response,
  };
};

export const getPostsFail = (response = null) => {
  return {
    type: GET_POSTS_FAIL,
    error: response,
  };
};

export const requestDeletePost = (data) => ({
  type: REQUEST_DELETE_POST,
  payload: data,
});

export const deletePostSuccess = (response = null) => {
  console.log("Duc******************* ", response);
  return {
    type: DELETE_POST_SUCCESS,
    result: response,
  };
};

export const deletePostFail = (response = null) => {
  return {
    type: DELETE_POST_FAIL,
    error: response,
  };
};
export const requestCountPost = (data) => ({
  type: REQUEST_COUNT_POST,
  payload: data,
});

export const countPostSuccess = (response = null) => {
  return {
    type: COUNT_POST_SUCCESS,
    result: response,
  };
};

export const countPostFail = (response = null) => {
  return {
    type: COUNT_POST_FAIL,
    error: response,
  };
};
