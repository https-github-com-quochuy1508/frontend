import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  text: {
    paddingTop: 120,
    fontSize: 24,
    textAlign: 'center',
  },

  title: {
    paddingLeft: 24,
    fontSize: 16,
    color: '#2176E1',
  },

  textInput: {
    fontSize:20,
    paddingLeft: 24,
    borderBottomWidth: 2,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomColor: '#2176E1',
    marginBottom: 70,
  },

  button: {
    padding: 30,
  },
});

function Signup({navigation}) {

  return (
    <View style={{flex: 1,}}>
      <Text style={styles.text}> Nhập số di động của bạn {"\n"}</Text>
      <Text style={styles.title}>Số di động</Text>
      <TextInput
        style={styles.textInput}
        keyboardType = 'numeric'
        textContentType = 'telephoneNumber'
      />
      <View style={styles.button}>
        <Pressable

        />
        <Button
        title='Tiếp'
        color='#2176E1'
        onPress={() => navigation.navigate('Mật khẩu')}
        />
      </View>
    </View>
  );
}


export default Signup;