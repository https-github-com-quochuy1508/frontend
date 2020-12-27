import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import * as Colors from '../../assets/Colors';

export default function Friend({avt, name,}) {
  return (
    <View style={styles.friend}>
      <Image style={styles.ava} source={{uri: avt}} />
      <Image style={styles.online} source={require('../../assets/images/online.png')} />
      <Text style={styles.textName}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  friend: {
    flex: 1,
    // maxWidth:90,
    height:90,
    width: 60,
    flexDirection: 'column',
    // justifyContent:'center',
    alignItems: 'center',
    // backgroundColor: '#ccc',
    marginBottom: 8,
    marginTop: 6,
    marginRight: 15,
  },
  ava:{
    marginHorizontal: 'auto',
    width: 55,
    height: 55,
    borderRadius: 55,
    marginBottom: 5,
  },
  textName: {
    fontSize: 13,
    color: Colors.BLACK,
    // fontWeight: "bold",
    alignItems: 'center',
    textAlign: 'center',
  },
  online: {
    position: 'absolute',
    width: 25,
    height: 25,
    right: 0,
    top: 34,
  },
});