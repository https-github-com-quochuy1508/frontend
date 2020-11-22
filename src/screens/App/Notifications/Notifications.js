import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableHighlight, Animated } from "react-native";

export default function Notifications() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Notifications Screen</Text>
    </View>
  )};

// import React, { Component } from 'react';
// import { Text, View, ScrollView, Animated } from 'react-native';
// import NavigationBar from 'react-native-navbar';
// import { MenuNav } from "../Menu";
// const AnimatedNavigationBar = Animated.createAnimatedComponent(NavigationBar);

// export default class BasicListView extends Component {
//   state = { isNavBarHidden: false, height: new Animated.Value(64) };

//   setAnimation = enable => {
//     Animated.timing(this.state.height, {
//       duration: 400,
//       toValue: enable? 64 : 0
//     }).start()
//   };

//   handleScroll = () => {
//     this.setAnimation(this.state.isNavBarHidden);
//     this.setState({ isNavBarHidden: !this.state.isNavBarHidden });
//   };

//   render() {
//     return (
//       <View style={{ flex: 1 }} >
//         <AnimatedNavigationBar style={{ backgroundColor: 'red', height: this.state.height }} />
//         <ScrollView onScroll={this.handleScroll}>
//           <MenuNav/>
//           <View style={{ height: 200 }}><Text>Test</Text></View>
//           <View style={{ height: 200 }}><Text>Test</Text></View>
//           <View style={{ height: 200 }}><Text>Test</Text></View>
//           <View style={{ height: 200 }}><Text>Test</Text></View>
//           <View style={{ height: 200 }}><Text>Test</Text></View>
//         </ScrollView>
//       </View>
//     );
//   }
// }