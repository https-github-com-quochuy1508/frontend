import React, {useState, useEffect} from 'react';
import {View, TextInput, StatusBar, StyleSheet, Image, Text, Keyboard, Pressable} from 'react-native';

export default function Login({navigation}) {
  const [focus, setFocus] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [press, setPress] = useState(0);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const WHITE = "#FFFFFF";
  const BLUE = "#3f77f3";
  const GREEN = "#00AA00";
  const LIGHT_GRAY = "#BEBEBE";
  const GRAY = "#999999";
  const WHITE_SMOKE = "#F5F5F5";
  const GAINSBORO = "#DCDCDC";
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: WHITE,
    },
    inputContainer:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    input1: {
      height: 50,
      width: 320,
      backgroundColor: press == 1 ? WHITE_SMOKE : WHITE,
      borderBottomColor: focus == 1 ? BLUE : LIGHT_GRAY,
      borderBottomWidth: focus == 1 ? 2 : 0.8,
      fontSize: 18,
      marginBottom: 10,
    },
    input2: {
      height: 50,
      width: 320,
      backgroundColor: press == 2 ? WHITE_SMOKE : WHITE,
      borderBottomColor: focus == 2 ? BLUE : LIGHT_GRAY,
      borderBottomWidth: focus == 2 ? 2 : 0.8,
      fontSize: 18,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: BLUE,
      marginTop: 20,
      marginBottom: 10,
      width: 320,
      height: 40,
      borderRadius: 4,
    },
    buttonText: {
      color: WHITE, 
      fontSize: 16, 
      fontWeight: "bold",
      opacity: (user.length > 0 && password.length > 0) ? 1 : 0.5,
    },
    button2Text: {
      color: WHITE, 
      fontSize: 16, 
      fontWeight: "bold",
    },
    forgot: {
      backgroundColor: press == 3 ? GAINSBORO : WHITE,
      borderRadius: 5,
      width: 150,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center'
    },
    newBox: {
      backgroundColor: press == 3 ? GAINSBORO : WHITE,
      borderRadius: 5,
      width: 220,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center'
    },
    forgotText: {
      color: BLUE, 
      fontSize: 16, 
      fontWeight: "bold"
    },
    new: {
      color: BLUE, 
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
      backgroundColor: GREEN,
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
          placeholderTextColor={GRAY}
          onFocus = {() => setFocus(1)}
          onChangeText = {(text) => {setUser(text)}}
          onTouchStart = {() => {setPress(1)}}
          onTouchEnd = {() => {setPress(0)}}
        />
        <TextInput 
          style={styles.input2}
          placeholder="Mật khẩu"
          placeholderTextColor={GRAY}
          secureTextEntry={true}
          onFocus = {() => setFocus(2)}
          onChangeText = {(text) => {setPassword(text)}}
          onTouchStart = {() => {setPress(2)}}
          onTouchEnd = {() => {setPress(0)}}
        />
        <Pressable 
          style={styles.button} 
          disabled={user.length == 0 || password.length == 0} 
          onPress={() => alert("Đăng nhập")}
        >
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </Pressable>
        {
          showImage ?
          <View style={{alignItems: 'center'}}>
            <Pressable 
              style={styles.forgot} 
              onTouchStart={()=>{setPress(3)}} 
              onTouchEnd={()=>{setPress(0)}} 
            >
              <Text style={styles.forgotText}>Quên mật khẩu?</Text>
            </Pressable>
            <View style={styles.orContainer}>
              <Text style={{color: LIGHT_GRAY}}>─────────────</Text>
              <Text style={{color: "#696969", fontSize: 12}}> HOẶC </Text>
              <Text style={{color: LIGHT_GRAY}}>─────────────</Text>
            </View>
            <Pressable style={styles.button2} onPress={() => {navigation.navigate("Signup")}}>
              <Text style={styles.button2Text}>Tạo tài khoản Fakebook mới</Text>
            </Pressable>
          </View>
          :
          <Pressable 
            style={styles.newBox} 
            onPress={() => navigation.navigate("Signup")} 
            onTouchStart={() => {setPress(3)}}
            onTouchEnd={()=>{setPress(0)}}
          >
            <Text style={styles.new}>Tạo tài khoản Fakebook mới</Text>
          </Pressable>
        }
      </View>
      <StatusBar backgroundColor={showImage ? "#2e4b8a" : WHITE} barStyle="light-content"/>
    </View>
  );
}