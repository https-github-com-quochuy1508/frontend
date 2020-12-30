import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Notifications from './Notifications';
const Stack = createStackNavigator();

export default function NotificationsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notifications" component={Notifications} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
