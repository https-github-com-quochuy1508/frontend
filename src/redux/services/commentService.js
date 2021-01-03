import request from '../../utils/request';
import varEnv from '../../utils/env';
import AsyncStorage from '@react-native-community/async-storage';

export default {
  create: (params) => {
    console.log("params:************** ", params);
    return request(varEnv.apiUrlBackend + `/api/comments`, {
      method: 'POST',
      body: {
        ...params,
      },
    });
  },
  
  get: (params) => {
    // console.log("params:************** ", params);
    return request(
      varEnv.apiUrlBackend +
        `/api/comments?filter=${JSON.stringify(params.filter)}`,
      {
        method: 'GET',
      },
    );
  },

};
