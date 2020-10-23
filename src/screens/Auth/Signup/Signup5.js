import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Keyboard , TextInput} from 'react-native';
import * as Colors from '../../../assets/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../../components/NextButton';


export default function Signup5({navigation, route}) {
  const [key, setKey] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [password, setPassword] = useState("");

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
    if(password.length >= 6) {
      setWrong(false);
      navigation.navigate("Rule", {
        name: route.params.name,
        birth: route.params.birth,
        phone: route.params.phone,
        password: password
      })
    } else {
      setWrong(true);
    }
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
      marginBottom: key ? "14%" : "22%"
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: key ? "13%" : "22%",
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
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chọn mật khẩu</Text>
      {
        wrong ? 
        <View style={{width: "90%", alignItems: 'center'}}>
        <Text style={{color: Colors.RED}}>Mật khẩu của bạn phải có tối thiểu 6 chữ cái, số</Text>
        <Text style={{color: Colors.RED}}>và biểu tượng (như ! và %%).</Text>
        <Icon name="exclamation-circle" color={Colors.RED} size={22} style={{position: "absolute", bottom: 0, right: 0}}/>
      </View> : null
      }
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Mật khẩu</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setPassword(text)}
          textContentType = "password"
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