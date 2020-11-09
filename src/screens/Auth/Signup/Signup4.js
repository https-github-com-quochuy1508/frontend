import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Keyboard, TextInput} from 'react-native';
import * as Colors from '../../../assets/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../../components/NextButton';


function Signup4({navigation, route}) {
  const [key, setKey] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [phone, setPhone] = useState("");

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
    let regex = new RegExp(/^\d{10}$/);
    if(regex.test(phone)) {
      setWrong(false);
      navigation.navigate("Password", {
        name: route.params.name,
        birth: route.params.birth,
        phone: phone
      })
    } else {
      setWrong(true);
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {marginTop: key ? "13%" : "22%"}]}>Nhập số di động của bạn</Text>
      {wrong ? 
        <View style={{width: "90%", alignItems: 'center'}}>
          <Text style={{color: Colors.RED}}>Vui lòng nhập số điện thoại hợp lệ.</Text>
          <Icon name="exclamation-circle" color={Colors.RED} size={22} style={{alignSelf: "flex-end"}}/>
        </View> : null
      }
      <View style={[styles.inputContainer, {marginBottom: key ? "14%" : "22%"}]}>
        <Text style={styles.title}>Số di động</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setPhone(text)}
          keyboardType = "phone-pad"
          textContentType = 'telephoneNumber'
          autoFocus={true}
          selectionColor={Colors.BLUE}
          onSubmitEditing={() => submit()}
        />
      </View>
      <TouchableOpacity onPress={() => submit()} activeOpacity={0.8}>
        <Button/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center'
  },
  inputContainer: {
    width: "90%",
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: "4%"
  },
  title: {
    fontSize: 12,
    color: Colors.BLUE,
    alignSelf: "flex-start",
    marginTop: "4%"
  },
  textInput: {
    fontSize: 18,
    width: "100%",
    borderBottomColor: Colors.BLUE,
    borderBottomWidth: 2
  }
});

export default Signup4;