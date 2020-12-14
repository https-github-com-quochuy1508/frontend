import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import {TouchableOpacity} from 'react-native';
import {navigation} from '../../rootNavigation';
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
      onPress={() => navigation.navigate("Search")}
    >
      <Icon name="search" size={24}/>
    </TouchableOpacity>
  )
}

export default SearchButton;