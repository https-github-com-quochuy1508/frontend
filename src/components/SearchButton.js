import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import {TouchableOpacity} from 'react-native';
import * as Colors from '../assets/Colors';
function SearchButton() {
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
    >
      <Icon name="search" size={24}/>
    </TouchableOpacity>
  )
}

export default SearchButton;