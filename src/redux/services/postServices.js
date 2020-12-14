import request from '../../utils/request';
import varEnv from '../../utils/env';
import AsyncStorage from '@react-native-community/async-storage';

export default {
  create: (params) => {
    return request(varEnv.apiUrlBackend + `/api/posts`, {
      method: 'POST',
      body: {
        ...params,
      },
    });
  },
  update: (id, params) => {
    return request(varEnv.apiUrlBackend + `/api/posts/` + id, {
      method: 'PUT',
      body: {
        ...params,
      },
    });
  },
  get: (params) => {
    return request(varEnv.apiUrlBackend + `/api/posts/`, {
      method: 'GET',
      params: params,
    });
  },
  count: (id) => {
    return request(varEnv.apiUrlBackend + `/api/posts/count/` + id, {
      method: 'GET',
    });
  },
  delete: (id) => {
    return request(varEnv.apiUrlBackend + `/api/posts/` + id, {
      method: 'DELETE',
    });
  },
};
