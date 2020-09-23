import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './Signup';
const Stack = createStackNavigator();

export default function SignupStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
