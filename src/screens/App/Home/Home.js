import React from 'react';
import {View, Text, StatusBar} from 'react-native';

export default function Home() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <StatusBar barStyle="dark-content"/>
    </View>
  );
}
