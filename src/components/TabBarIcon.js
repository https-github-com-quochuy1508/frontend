import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

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
    case "Profile":
      iconName = focused ? 'person-circle' : 'person-circle-outline';  
      break;
    case "Notification":
      iconName = focused ? 'notifications' : 'notifications-outline';
      break;
    case "Menu":
      iconName = focused ? 'menu' : 'menu-outline';
      break;
  }
  return <Icon name={iconName} size={24} color={color} />;
}

export default TabBarIcon;