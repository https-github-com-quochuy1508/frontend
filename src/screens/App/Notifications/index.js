import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Notifications from './Notifications';
import SearchForm from '../../../components/search/SearchForm';
import SearchResult from '../../../components/search/SearchResult';
const Stack = createStackNavigator();

export default function NotificationsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="SearchForm" component={SearchForm} />
      <Stack.Screen name="Nhật ký hoạt động" component={SearchResult} />
    </Stack.Navigator>
  );
}
