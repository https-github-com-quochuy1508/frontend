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
