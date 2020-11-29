import React from 'react';
import {StatusBar, StyleSheet, ScrollView, Text} from 'react-native';
import PostTool from '../../../components/PostTool';
import Post from '../../../components/Post';
import Modal from 'react-native-modal';
import * as Colors from '../../../assets/Colors';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <PostTool/>
      <StatusBar barStyle="dark-content"/>
      <Post name="Quân Nguyễn" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9CCD1',
  },
});
