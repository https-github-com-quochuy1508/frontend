import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import * as Colors from '../../assets/Colors';

export default function CommentPane({cmt, avt, name, time}) {
  return (
    <View style={styles.container}>
      <Image style={styles.ava} source={{uri: avt}}/>
      <View style={styles.text}>
        <View style={styles.content}>
          <Text style={styles.textName}>{name}</Text>
          <Text style={styles.textCmt}>{cmt}</Text>
        </View>
        <Text style={styles.textTime}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textName: {
    fontSize: 14,
    color: Colors.BLACK,
    fontWeight: "bold"
  },
  textCmt: {
    fontSize: 16,
    color: Colors.BLACK,
  },
  textTime: {
    fontSize: 14,
    color: Colors.DARKGRAY,
    marginLeft:10,
    fontWeight: "bold",
  },
  container: {
    flex:1,
    flexDirection: 'row',
    height: 'auto',
    marginBottom:10,
  },
  ava: {
    borderRadius:50,
    width: 40,
    height: 40,
    marginRight: 5,
  },
  text:{
    width:'auto',
    maxWidth:'82%',
  },
  content:{
    backgroundColor: Colors.WHITESMOKE,
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:15,
  }  
});