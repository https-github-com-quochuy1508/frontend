import React, { useState, useEffect } from 'react';
import {View, Text,StyleSheet,TouchableOpacity,TextInput, Keyboard} from 'react-native';
import * as Colors from '../../../assets/Colors'


export default function Signup2({navigation}) {
  const [focus, setFocus] = useState(0);
  const [key, setKey] = useState(true);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setKey(true);
  };

  const _keyboardDidHide = () => {
    setKey(false);
  };

  const styles = StyleSheet.create({
    container: {
      alignItems:'center',
      backgroundColor: Colors.WHITE,
    },
    text1: {
      marginTop: key ? '15%' : '25%',
      fontSize: 18,
      fontWeight: "bold",
    },
    textButton: {
      fontSize: 14,
      alignItems:'center',
      color: Colors.WHITE,
    },
    buttonContainer: {
      width: "90%",
      height: 44,
      marginTop: key ? "8%" : "18%",
      backgroundColor: Colors.BLUE,
      borderRadius:6,
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputContainer:{
      flexDirection:'row',
      marginTop:'8%',
      marginBottom:'8%',
    },  
    textInput:{
      width:'43%',
      height: 40,
      fontSize: 18,
      backgroundColor: Colors.WHITE,
      borderBottomColor: focus == 1 ? Colors.BLUE : Colors.GRAY,
      borderBottomWidth: focus == 1 ? 2 : 0.5,
      marginHorizontal:5,
    },
    textInput2:{
      width:'43%',
      height:40,
      fontSize:18,
      backgroundColor: Colors.WHITE,
      borderBottomColor: focus == 2 ? Colors.BLUE : Colors.GRAY,
      borderBottomWidth: focus == 2 ? 2 : 0.5,
      marginHorizontal:5,
    },
  })
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Bạn tên gì?</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
          placeholder="Họ"
          placeholderTextColor={Colors.GRAY}
          returnKeyType='next'
          autoFocus={true}
          onFocus={() => { setFocus(1)}}
          selectionColor={Colors.BLUE}
        />
        <TextInput style={styles.textInput2}
          placeholder="Tên"
          placeholderTextColor={Colors.GRAY}
          onFocus={() => { setFocus(2)}}
          selectionColor={Colors.BLUE}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Birth')}>
        <Text style={styles.textButton}>Tiếp</Text>
      </TouchableOpacity>
    </View>
  );
}

