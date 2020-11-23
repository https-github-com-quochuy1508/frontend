import request from '../../utils/request';
import varEnv from '../../utils/env';
import AsyncStorage from '@react-native-community/async-storage';

export default {
  uploadImage: async (formdata) => {
    const cookieToken = await AsyncStorage.getItem('token');

    console.log(
      '========================================cookieToken========================================: ',
      cookieToken,
    );
    const token = cookieToken !== 'undefined' ? cookieToken : null;
    return request(varEnv.apiUrlBackend + '/api/upload/uploadfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-Auth-Key': `${token}`,
      },
      body: formdata,
    });
  },
};
