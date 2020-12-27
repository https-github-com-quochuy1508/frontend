import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {TouchableOpacity} from 'react-native';
import * as Colors from '../assets/Colors';
import {navigation} from '../../rootNavigation';

function MessengerButton() {
  return(
    <TouchableOpacity 
      style={{
        backgroundColor: Colors.WHITESMOKE, 
        borderRadius: 20, 
        marginRight: 10, 
        width: 40, 
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onPress={() => navigation.navigate("Messenger")}
    >
      <Icon name="messenger" size={24}/>
    </TouchableOpacity>
  )
}

export default MessengerButton;