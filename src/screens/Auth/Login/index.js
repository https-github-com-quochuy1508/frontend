import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Login2 from './Login2';
const Stack = createStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login2" component={Login2}/>
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  );
}
