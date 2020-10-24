import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {logOut} from '../../../redux/actions/loginAction';
import AsyncStorage from '@react-native-community/async-storage';

function Menu({logout}) {
  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('token');
    } catch (error) {
      // Error saving data
    }
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Log out" onPress={() =>{removeToken();logout()}}></Button>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logOut());
    },
  };
};

const MenuContainer = connect(null, mapDispatchToProps)(Menu);
export default MenuContainer;