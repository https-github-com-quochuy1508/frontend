import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import App from './App';
import Auth from './Auth';
const Navigation = ({users}) => {
  const [info, setInfo] = useState(null);

  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      if (jsonValue != null) {
        setInfo(JSON.parse(jsonValue));
        console.log('users: ', jsonValue);
      }
      else {
        setInfo(users);
        console.log('users: ', users);
      }
    } catch(e) {
      // error reading value
    }
  }
  useEffect(() => {
    getUser()
  }, [users]);
  return info && Object.keys(info).length > 0 ? <App /> : <Auth />;
};

const mapStateToProps = (state) => state;
const NavigationConnected = connect(mapStateToProps, null)(Navigation);
export default NavigationConnected;