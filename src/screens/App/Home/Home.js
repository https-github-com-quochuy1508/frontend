import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home() {
  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem('token')
      console.log("Deleted")
    } catch (e) {
    }
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => deleteData()}>Home Screen</Text>
      <StatusBar barStyle="dark-content"/>
    </View>
  );
}
