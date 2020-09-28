import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './Menu';
const Stack = createStackNavigator();

export default function MenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
}
