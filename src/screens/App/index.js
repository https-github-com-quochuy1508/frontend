import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './HomeTab/Home';
import Notifications from './Notifications';
import Friend from './FriendTab';
import Wall from './PersonalTab';
import Menu from './Menu';
import Icon from '../../components/TabBarIcon';
import * as Colors from '../../assets/Colors';
import Search from '../../components/SearchButton';
import Messenger from '../../components/MessengerButton';
import Setting from './PersonalTab/Setting';
import Edit from './PersonalTab/Edit';
import Chat from './Chat/Chat';
import Friend from './FriendTab';
import FA from 'react-native-vector-icons/FontAwesome';
import Mat from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        activeTintColor: Colors.BLUE,
        inactiveTintColor: Colors.DARKGRAY,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          return <Icon name={route.name} color={color} focused={focused} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Friend" component={Friend} />
      <Tab.Screen name="Wall" component={Wall} />
      <Tab.Screen name="Watch" component={Notifications} />
      <Tab.Screen name="Notification" component={Notifications} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
}

export default function AppStack({navigation}) {
  const [press, setPress] = useState(0);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={AppTabs}
        options={
          {
            headerTitle: "fakebook",
            headerTitleStyle: {
              color: Colors.BLUE,
              fontWeight: "bold",
              fontSize: 28,
              fontFamily: "Roboto",
            },
            headerStyle: {
              elevation: 0
            },
            headerRight: () =>
              <View style={{ flexDirection: 'row' }}>
                <Search />
                <Messenger />
              </View>
          }
        }
      />
      <Stack.Screen name="Chat" component={Chat} options={{
        headerTitle: '',
        headerRight: () => (
          <View style={{ marginRight: 30, flexDirection: 'row', justifyContent: 'center', }}>
            <FA name='phone' size={22} color={Colors.BLUE} style={{ marginRight: 30 }}></FA>
            <FA name='video-camera' size={22} color={Colors.BLUE} style={{ marginRight: 30 }}></FA>
            <Pressable
              style={[
                { backgroundColor: press == 1 ? Colors.GAINSBORO : Colors.WHITE },
              ]}
              onTouchStart={() => setPress(1)}
              onTouchEnd={() => setPress(0)}
              onPressOut={() => setPress(0)}
            >
              <Mat name='information' size={22} color={Colors.BLUE}></Mat>
            </Pressable>
          </View>
        ),
        headerLeft: () => (
          <View style={{ marginLeft: 30, flexDirection: 'row', justifyContent: 'center', }}>
            <Pressable style={{flexDirection: 'row', justifyContent: 'center',}}>
              <Image style={{width: 35, height: 35, borderRadius: 20}} source={{ uri: "https://placeimg.com/50/50/animals" }}></Image>
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 3}}>Quân</Text>
            </Pressable>
          </View>
        ),
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }} />
      <Stack.Screen name="Setting" component={Setting} options={{
        headerTitle: 'Cài đặt trang cá nhân',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }} />
      <Stack.Screen name="Edit" component={Edit} options={{
        headerTitle: 'Chỉnh sửa trang cá nhân',
      }} />
    </Stack.Navigator>
  );
}
