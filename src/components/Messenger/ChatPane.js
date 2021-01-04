import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import * as Colors from '../../assets/Colors';
import {navigation} from '../../../rootNavigation';

export default function ChatPane({avt, name,mess}) {
    const onPress= () =>{navigation.navigate("Chat")}
  return (
    <TouchableHighlight
    onPress={onPress}
    underlayColor={Colors.GRAY}
    style={styles.container}
    >
      <View style={styles.chat}>
        <Image style={styles.ava} source={{uri: avt}} />
        <Image
          style={styles.online}
          source={require('../../assets/images/online.png')}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.mess}>{mess}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
    container:{
        // marginBottom:15,
    },
  chat: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'#eee',
    paddingVertical:8,
    paddingLeft:10,
    // paddingBottom:15,
    // marginBottom:15,
  },
  ava:{
    marginHorizontal: 'auto',
    width: 55,
    height: 55,
    borderRadius: 55,
    // marginBottom: 5,
    marginRight:10,
  },
  online: {
    position: 'absolute',
    width: 23,
    height: 23,
    left: 46,
    top: 44,
  },
  name: {
    fontSize:16,
    color:'#555'
  },
  mess: {
    // marginTop:5,
    color:'#555'
  },
});