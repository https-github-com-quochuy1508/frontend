import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Signup from './Signup';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}