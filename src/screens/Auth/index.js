import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signup4 from './Signup/Signup4';
import Signup5 from './Signup/Signup5';
import Signup6 from './Signup/Signup6';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Số di động" component={Signup4} />
      <Stack.Screen name="Mật khẩu" component={Signup5} />
      <Stack.Screen name="Điều khoản & quyền riêng tư" component={Signup6} />
    </Stack.Navigator>
  );
}