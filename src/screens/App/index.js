import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './HomeTab/Home';
import Notifications from './Notifications';
import Menu from './Menu';
import Icon from '../../components/TabBarIcon';
import * as Colors from '../../assets/Colors';

const Tab = createMaterialTopTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator 
      tabBarOptions={{showIcon: true, showLabel: false, activeTintColor: Colors.BLUE, inactiveTintColor: Colors.DARKGRAY}}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color}) => {
          return <Icon name={route.name} color={color} focused={focused}/>;
        },
      })}
    >
			<Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Friend" component={Home} />
      <Tab.Screen name="Group" component={Home} />
      <Tab.Screen name="Watch" component={Home} />
      <Tab.Screen name="Notification" component={Notifications} />
      <Tab.Screen name="Menu" component={Menu} />
		</Tab.Navigator>

  );
}