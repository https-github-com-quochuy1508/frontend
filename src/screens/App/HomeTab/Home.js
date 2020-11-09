import React from 'react';
import {StatusBar, StyleSheet, ScrollView} from 'react-native';
import PostTool from '../../../components/PostTool';
import * as Colors from '../../../assets/Colors';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <PostTool/>
      <StatusBar barStyle="dark-content"/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});
