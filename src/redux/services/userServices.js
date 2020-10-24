import request from '../../utils/request';
import varEnv from '../../utils/env';
import AsyncStorage from '@react-native-community/async-storage';

export default {
  authendicate: (params) => {
    return request(varEnv.apiUrlBackend + `/auth/login`, {
      method: 'POST',
      body: {
        ...params,
      },
    });
  },

  create: (params) => {
    return request(varEnv.apiUrlBackend + `/auth/signin`, {
      method: 'POST',
      body: {
        ...params,
      },
    });
  },

  setToken: async (token) => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      // Error saving data
    }
  },

  removeToken: async () => {
    try {
      await AsyncStorage.removeItem('token');
    } catch (error) {
      // Error saving data
    }
  },
  
  getToken: async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  },
};
