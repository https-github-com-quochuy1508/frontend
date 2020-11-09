import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signup1 from './Signup1';
import Signup2 from './Signup2';
import Signup3 from './Signup3';
import Signup4 from './Signup4';
import Signup5 from './Signup5';
import Signup6 from './Signup6';
import Signup9 from './Signup9';

const Stack = createStackNavigator();

export default function SignupStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0.8
        },
        headerTitleStyle: {
          fontSize: 17,
        }
      }}
    >
      <Stack.Screen name="Login" component={Signup9} options={{ title: 'Đang đăng nhập...' }} />
      <Stack.Screen name="Create" component={Signup1} options={{ title: 'Tạo tài khoản' }} />
      <Stack.Screen name="Name" component={Signup2} options={{ title: 'Tên' }} />
      <Stack.Screen name="Birth" component={Signup3} options={{ title: 'Ngày sinh' }} />
      <Stack.Screen name="Phone" component={Signup4} options={{ title: 'Số điện thoại' }} />
      <Stack.Screen name="Password" component={Signup5} options={{ title: 'Mật khẩu' }} />
      <Stack.Screen name="Rule" component={Signup6} options={{ title: 'Điều khoản & quyền riêng tư' }} />
    </Stack.Navigator>
  );
}
