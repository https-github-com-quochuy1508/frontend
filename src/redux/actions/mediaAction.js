// authentication
export const REQUEST_CREATE_MEDIA = 'REQUEST_CREATE_MEDIA';
export const CREATE_MEDIA_SUCCESS = `CREATE_MEDIA_SUCCESS`;
export const CREATE_MEDIA_FAIL = `CREATE_MEDIA_FAIL`;

export const requestCreateMedia = (data) => ({
  type: REQUEST_CREATE_MEDIA,
  payload: data,
});

export const createMediaSuccess = (response = null) => {
  return {
    type: CREATE_MEDIA_SUCCESS,
    result: response,
  };
};

export const createMediaFail = (response = null) => {
  return {
    type: CREATE_MEDIA_FAIL,
    error: response,
  };
};
