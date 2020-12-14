import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FriendScreen from './FriendScreen';
const Stack = createStackNavigator();

export default function NotificationsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FriendScreen" component={FriendScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
