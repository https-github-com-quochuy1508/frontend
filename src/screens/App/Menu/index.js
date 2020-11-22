import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Menu from './Menu';
// import Notifications from '../Notifications';

// const Stack = createStackNavigator();

export default function MenuStack() {
  return (
    <Menu/>
    // {/* <Stack.Navigator>
    //   <Stack.Screen name="Menu" component={Menu} />
    // </Stack.Navigator> */}
  );
}



// const MenuNav = createStackNavigator({
//   Menu: {
//     screen: Menu,
//   },
//   Notifications:{
//     screen:Notifications,
//   }
// });

// export default createAppContainer(MenuNav);

// import React from 'react';
// import { View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );
// export default createAppContainer(AppNavigator);