import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import * as Colors from '../../assets/Colors';

const styles = StyleSheet.create({
  textName: {
    fontSize: 14,
    color: Colors.BLACK,
    fontWeight:"700",
  },
  textCmt: {
    fontSize: 16,
    color: Colors.BLACK,
  },
  textTime: {
    fontSize: 14,
    color: Colors.BLACK,
    marginLeft:10,
  },
  container: {
    flex:1,
    flexDirection: 'row',
    // width: '100%',
    height: 'auto',
    marginBottom:10,
  },
  ava: {
    borderRadius:50,
    width: 40,
    height: 40,
    marginRight:10,
    // flexGrow:0,
  },
  text:{
    flexDirection:'column',
    // backgroundColor: '#e5e6eb',
    width:'auto',
    maxWidth:'82%',
    // flexGrow:1,
  },
  content:{
    flexDirection:'column',
    backgroundColor: '#f1f2f6',
    // padding:10,
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:15,
  }  
});
export default function CommentPane({cmt, ava, name, time}) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.ava}
          source={{
            uri: ava,
          }}
        />
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