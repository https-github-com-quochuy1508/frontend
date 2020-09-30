import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StatusBar, StyleSheet, Image, Text} from 'react-native';

function Login({navigation}) {
  const [focus, setFocus] = useState(0);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    inputContainer:{
      marginTop: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input1: {
      height: 50,
      width: 350,
      borderBottomColor: focus == 1 ? "#3869e7" : "#BEBEBE",
      borderBottomWidth: focus == 1 ? 2 : 0.5,
      fontSize: 20,
    },
    input2: {
      height: 50,
      width: 350,
      borderBottomColor: focus == 2 ? "#3869e7" : "#BEBEBE",
      borderBottomWidth: focus == 2 ? 2 : 0.5,
      fontSize: 20,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3869e7',
      marginTop: 20,
      marginBottom: 10,
      width: 350,
      height: 40,
      borderRadius: 4,
    },
    buttonText: {
      color: "#ffffff", 
      fontSize: 17, 
      fontWeight: "bold"
    },
    forgot: {
      color: "#3869e7", 
      fontSize: 17, 
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
      width: 250,
      height: 40,
      borderRadius: 4,
    },
  });
  
  return (
    <View style={styles.container}>
      <Image 
        style={{height: 200}} 
        source={{uri: 'https://raw.githubusercontent.com/ihsaninh/facebook-clone-react-native/master/src/img/banner.png' }} 
        resizeMode="cover"
      />
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input1}
          placeholder="Số điện thoại hoặc email"
          placeholderTextColor="#BEBEBE"
          onFocus = {() => setFocus(1)}
        />
        <TextInput 
          style={styles.input2}
          placeholder="Mật khẩu"
          placeholderTextColor="#BEBEBE"
          secureTextEntry={true}
          onFocus = {() => setFocus(2)}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <Text style={styles.forgot}>Quên mật khẩu?</Text>
        <View style={styles.orContainer}>
          <Text style={{color: "#BEBEBE"}}>───────────────</Text>
          <Text style={{color: "#696969"}}>HOẶC</Text>
          <Text style={{color: "#BEBEBE"}}>───────────────</Text>
        </View>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Tạo tài khoản Fakebook mới</Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor="#2e4b8a"/>
    </View>
  );
}

export default Login;