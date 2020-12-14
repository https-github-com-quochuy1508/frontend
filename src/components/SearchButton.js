import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import {TouchableOpacity} from 'react-native';
function SearchButton({bgColor}) {
  return(
    <TouchableOpacity 
      style={{
        backgroundColor: bgColor, 
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