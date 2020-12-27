import request from '../../utils/request';
import varEnv from '../../utils/env';
import AsyncStorage from '@react-native-community/async-storage';

export default {
  create: (params) => {
    return request(varEnv.apiUrlBackend + `/api/likes`, {
      method: 'POST',
      body: {
        ...params,
      },
    });
  },
  delete: (data) => {
    console.log('data: ', data);
    return request(
      varEnv.apiUrlBackend +
        `/api/likes/userId=${data.userId}&postId=${data.postId}`,
      {
        method: 'DELETE',
      },
    );
  },
};
