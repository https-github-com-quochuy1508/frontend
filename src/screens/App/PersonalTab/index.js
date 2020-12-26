import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Personal from './Personal';
const Stack = createStackNavigator();

export default function PersonalStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Personal" component={Personal} />
    </Stack.Navigator>
  );
}
