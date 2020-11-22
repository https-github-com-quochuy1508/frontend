import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';

function TabBarIcon({color, focused, name}) {
  let iconName;
  switch (name) {
    case "Home":
      iconName = focused ? 'home' : 'home-outline';
      break;
    case "Friend":
      iconName = focused ? 'people' : 'people-outline'; 
      break;
    case "Group":
      iconName = focused ? 'people-circle' : 'people-circle-outline';  
      break;
    case "Watch":
      iconName = focused ? 'tv' : 'tv-outline';  
      break;
    case "Notification":
      iconName = focused ? 'notifications' : 'notifications-outline';
      break;
    case "Menu":
      return <Icon2 name="menu" size={24} color={color}/>
  }
  return <Icon name={iconName} size={24} color={color} />;
}

export default TabBarIcon;
