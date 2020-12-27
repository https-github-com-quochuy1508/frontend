import request from '../../utils/request';
import varEnv from '../../utils/env';
import AsyncStorage from '@react-native-community/async-storage';

export default {
  create: (params) => {
    console.log("Call api create comment ************** ", params);
    return request(varEnv.apiUrlBackend + `/api/comments`, {
      method: 'POST',
      body: {
        ...params,
      },
    });
  },
  
};
