import request from '../../utils/request';
import varEnv from '../../utils/env';
import AsyncStorage from '@react-native-community/async-storage';

export default {
  create: (params) => {r
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
  search: (params) => {
    return request(
      varEnv.apiUrlBackend +
        `/api/posts/search/ok?filter=${JSON.stringify(params.filter)}`,
      {
        method: 'GET',
      },
    );
  },
  count: (params) => {
    return request(varEnv.apiUrlBackend + `/api/posts/count/like`, {
      method: 'GET',
      params: params,
    });
  },
  delete: (id) => {
    return request(varEnv.apiUrlBackend + `/api/posts/` + id, {
      method: 'DELETE',
    });
  },
};
