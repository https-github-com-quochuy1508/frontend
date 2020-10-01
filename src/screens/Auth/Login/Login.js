import React, {useState, useEffect} from 'react';
import {View, TextInput, TouchableOpacity, StatusBar, StyleSheet, Image, Text, Keyboard} from 'react-native';

export default function Login({navigation}) {
  const [focus, setFocus] = useState(0);
  const [showImage, setShowImage] = useState(true);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    inputContainer:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    input1: {
      height: 50,
      width: 320,
      borderBottomColor: focus == 1 ? "#3f77f3" : "#BEBEBE",
      borderBottomWidth: focus == 1 ? 2 : 0.8,
      fontSize: 18,
    },
    input2: {
      height: 50,
      width: 320,
      borderBottomColor: focus == 2 ? "#3f77f3" : "#BEBEBE",
      borderBottomWidth: focus == 2 ? 2 : 0.8,
      fontSize: 18,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3f77f3',
      marginTop: 20,
      marginBottom: 10,
      width: 320,
      height: 40,
      borderRadius: 4,
    },
    buttonText: {
      color: "#ffffff", 
      fontSize: 16, 
      fontWeight: "bold",
      opacity: 0.5,
    },
    button2Text: {
      color: "#ffffff", 
      fontSize: 16, 
      fontWeight: "bold",
    },
    forgot: {
      color: "#3f77f3", 
      fontSize: 16, 
      fontWeight: "bold"
    },
    new: {
      color: "#3f77f3", 
      fontSize: 13, 
      fontWeight: "bold"
    },
    orContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 70,
    },
    button2: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00AA00',
      marginTop: 70,
      marginBottom: 10,
      width: 240,
      height: 35,
      borderRadius: 4,
    },
  });
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setShowImage(false);
  };

  const _keyboardDidHide = () => {
    setShowImage(true);
  };
  return (
    <View style={styles.container}>
      {
        showImage ?
        <Image 
          style={{height: 200, marginBottom: 100}} 
          source={{uri: 'https://raw.githubusercontent.com/ihsaninh/facebook-clone-react-native/master/src/img/banner.png' }} 
          resizeMode="cover"
        />
        :
        <View style={{alignItems: 'center', justifyContent: 'center', height: 250}}> 
          <Image 
            style={{height: 65, width: 65}} 
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' }} 
          />
        </View>
      }
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input1}
          placeholder="Số điện thoại hoặc email"
          placeholderTextColor="#999999"
          onFocus = {() => setFocus(1)}
        />
        <TextInput 
          style={styles.input2}
          placeholder="Mật khẩu"
          placeholderTextColor="#999999"
          secureTextEntry={true}
          onFocus = {() => setFocus(2)}
        />
        <TouchableOpacity style={styles.button} delayPressIn>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        {
          showImage ?
          <View style={{alignItems: 'center'}}>
            <Text style={styles.forgot}>Quên mật khẩu?</Text>
              <View style={styles.orContainer}>
              <Text style={{color: "#BEBEBE"}}>─────────────</Text>
              <Text style={{color: "#696969", fontSize: 12}}> HOẶC </Text>
              <Text style={{color: "#BEBEBE"}}>─────────────</Text>
            </View>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.button2Text}>Tạo tài khoản Fakebook mới</Text>
            </TouchableOpacity>
          </View>
          :
          <Text style={styles.new}>Tạo tài khoản Fakebook mới</Text>
        }
      </View>
      <StatusBar backgroundColor={showImage ? "#2e4b8a" : "#ffffff"}/>
    </View>
  );
}