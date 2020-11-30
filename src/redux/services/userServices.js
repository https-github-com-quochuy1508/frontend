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
        // console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  },

  setName: async (data) => {
    try {
      await AsyncStorage.setItem('name', data);
    } catch (error) {
      // Error saving data
    }
  },

  getName: async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
        // We have data!!
        return value;
      }
      return null;
    } catch (error) {
      return null;
    }
  },

  setAvatar: async (data) => {
    try {
      await AsyncStorage.setItem('avatar', data);
    } catch (error) {
      // Error saving data
    }
  },

  getAvatar: async () => {
    try {
      const value = await AsyncStorage.getItem('avatar');
      if (value !== null) {
        // We have data!!
        return value;
      }
      return null;
    } catch (error) {
      return null;
    }
  },

  setUserId: async (data) => {
    try {
      await AsyncStorage.setItem('userId', data);
    } catch (error) {
      // Error saving data
    }
  },

  getUserId: async () => {
    try {
      const value = await AsyncStorage.getItem('userId');
      if (value !== null) {
        // We have data!!
        return value;
      }
      return null;
    } catch (error) {
      return null;
    }
  },

  getTelephone: async () => {
    try {
      const value = await AsyncStorage.getItem('telephone');
      if (value !== null) {
        // We have data!!
        // console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  },

  setTelephone: async (data) => {
    try {
      await AsyncStorage.setItem('telephone', data);
    } catch (error) {
      // Error saving data
    }
  },
};
