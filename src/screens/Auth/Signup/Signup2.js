import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard, Alert} from 'react-native';
import * as Colors from '../../../assets/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../../components/NextButton';

export default function Signup2({navigation}) {
  const [focus, setFocus] = useState(0);
  const [key, setKey] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [alert, setAlert] = useState(0);

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

  const submit = () => {
    if (firstName.length > 0 && lastName.length > 0) {
      const name = firstName + " " + lastName;
      navigation.navigate("Birth", {
        name: name
      })
    }
    else if(firstName.length == 0 && lastName.length == 0) {
      setAlert(1);
    }
    else if(firstName.length > 0) {
      setAlert(2);
    }
    else {
      setAlert(3);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {marginTop: key ? '15%' : '25%'}]}>Bạn tên gì?</Text>
      {alert > 0 ? 
        <View style={styles.alert}>
          {
            alert == 1 ? 
            <Text style={{color: Colors.RED}}>Vui lòng nhập họ và tên của bạn.</Text> :
            ( alert == 2 ? 
            <Text style={{color: Colors.RED}}>Vui lòng nhập tên của bạn.</Text> : 
            <Text style={{color: Colors.RED}}>Vui lòng nhập họ của bạn.</Text>
            )
          }
          <Icon name="exclamation-circle" color={Colors.RED} size={22} style={{alignSelf: "flex-end"}}/>
        </View> : null
      }
      <View style={[styles.inputContainer, {marginBottom: key ? "16%" : "26%"}]}>
        <TextInput 
          style={[
            styles.textInput, 
            {
              borderBottomColor: alert > 0 ? Colors.RED : (focus == 1 ? Colors.BLUE : Colors.GRAY),
              borderBottomWidth: focus == 1 ? 2 : 0.5
            }
          ]}
          placeholder="Họ"
          placeholderTextColor={Colors.GRAY}
          returnKeyType='next'
          autoFocus={true}
          onFocus={() => { setFocus(1); setAlert(0)}}
          selectionColor={Colors.BLUE}
          onChangeText={(text) => setFirstName(text.trim())}
        />
        <TextInput 
          style={[
            styles.textInput, 
            {
              borderBottomColor: alert > 0 ? Colors.RED : (focus == 2 ? Colors.BLUE : Colors.GRAY),
              borderBottomWidth: focus == 2 ? 2 : 0.5
            }
          ]}
          placeholder="Tên"
          placeholderTextColor={Colors.GRAY}
          onFocus={() => { setFocus(2); setAlert(0)}}
          selectionColor={Colors.BLUE}
          onChangeText={(text) => setLastName(text.trim())}
        />
      </View>
      <TouchableOpacity onPress={() => submit()} activeOpacity={0.8}>
        <Button />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    backgroundColor: Colors.WHITE,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  inputContainer:{
    flexDirection:'row',
    marginTop:'8%',
  },  
  textInput:{
    width:'43%',
    height: 40,
    fontSize: 18,
    backgroundColor: Colors.WHITE,
    marginHorizontal:5,
  },
  alert: {
    width: "90%", 
    alignItems: 'center', 
    marginTop: 15
  }
})