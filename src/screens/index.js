import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import App from './App';
import Auth from './Auth';
const Navigation = ({users}) => {
  const [auth, setAuth] = useState(false);

  const getUser = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        // console.log(token);
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    // console.log('users: ', users);
    getUser();
  }, [users]);
  return auth ? <App /> : <App />;
};

const mapStateToProps = (state) => state;
const NavigationConnected = connect(mapStateToProps, null)(Navigation);
export default NavigationConnected;
