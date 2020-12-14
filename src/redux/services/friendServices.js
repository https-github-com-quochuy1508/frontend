import {stringify} from 'qs';
import request from '../../utils/request';
import varEnv from '../../utils/env';
import AsyncStorage from '@react-native-community/async-storage';

export default {
  get: (params) => {
    // console.log('params: ', params);
    // const param = stringify(params);
    // console.log(`/api/friends?${param}`);
    return request(
      varEnv.apiUrlBackend +
        `/api/friends?filter=${JSON.stringify(params.filter)}`,
      {
        method: 'GET',
      },
    );
  },
};
