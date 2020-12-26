import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './HomeTab/Home';
import Notifications from './Notifications';
import Personal from './PersonalTab/Personal';
import Menu from './Menu';
import Icon from '../../components/TabBarIcon';
import * as Colors from '../../assets/Colors';
import Search from '../../components/SearchButton';
import Messenger from '../../components/MessengerButton';
import Setting from './PersonalTab/Setting';
import Edit from './PersonalTab/Edit';
import Chat from './Chat/Edit';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{ showIcon: true, showLabel: false, activeTintColor: Colors.BLUE, inactiveTintColor: Colors.DARKGRAY }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          return <Icon name={route.name} color={color} focused={focused} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Personal} />
      <Tab.Screen name="Friend" component={Notifications} />
      <Tab.Screen name="Group" component={Notifications} />
      <Tab.Screen name="Watch" component={Notifications} />
      <Tab.Screen name="Notification" component={Notifications} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>

  );
}

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={AppTabs}
        options={
          {
            headerTitle: "fakebook",
            headerTitleStyle: {
              color: Colors.BLUE,
              fontWeight: "bold",
              fontSize: 28,
              fontFamily: "Roboto",
            },
            headerStyle: {
              elevation: 0
            },
            headerRight: () =>
              <View style={{ flexDirection: 'row' }}>
                <Search />
                <Messenger />
              </View>
          }
        }
      />
      <Stack.Screen name="Setting" component={Setting} options={{
        headerTitle: 'Cài đặt trang cá nhân',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }} />
      <Stack.Screen name="Edit" component={Edit} options={{
        headerTitle: 'Chỉnh sửa trang cá nhân',
      }} />
    </Stack.Navigator>
  )
}