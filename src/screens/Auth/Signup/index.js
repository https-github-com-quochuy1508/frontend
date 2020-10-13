import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signup1 from './Signup1';
import Signup2 from './Signup2';
import Signup3 from './Signup3';

const Stack = createStackNavigator();

export default function SignupStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Create" component={Signup1} options={{ title: 'Welcome11' }}/>
      <Stack.Screen name="Name" component={Signup2} options={{ title: 'Welcome22' }} />
      <Stack.Screen name="Birth" component={Signup3}  options={{ title: 'Welcome33' }}/>
    </Stack.Navigator>
  );
}
