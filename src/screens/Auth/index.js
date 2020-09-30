import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}