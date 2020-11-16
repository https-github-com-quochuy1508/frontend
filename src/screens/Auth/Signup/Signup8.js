import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Keyboard, TextInput, Linking } from 'react-native';
import * as Colors from '../../../assets/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import ConfirmButton from '../../../components/ConfirmButton';
import CannotGetCodeButton from '../../../components/CannotGetCodeButton';


function Signup8({ navigation, route }) {
  const [key, setKey] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [code, setCode] = useState("");

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
    let regex = new RegExp(/^\d{5}$/);
    if (regex.test(code)) {
      setWrong(false);
      // navigation.navigate("Password", {
      //   name: route.params.name,
      //   birth: route.params.birth,
      //   phone: phone
      // })
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
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: key ? "4%" : "5%",
      marginTop: "4%",
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: key ? "1%" : "1%",
      marginBottom: "0%"
    },
    normalText: {
      fontSize: 16,
      marginTop: key ? "4%" : "5%",
      marginBottom: "0%"
    },
    title: {
      fontSize: 24,
      color: "#000000",
      fontWeight: 'bold',
      alignSelf: "flex-start",
      marginTop: "4%"
    },
    textInput: {
      fontSize: 20,
      fontWeight: 'bold',
      width: "35%",
      borderColor: "#CECFCD",
      borderWidth: 1,
      borderRadius: 10,
      marginTop: "4%",
      marginLeft: "1%",
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.normalText}> Chúng tôi đã gửi SMS kèm mã tới <Text style={styles.text}>0123456789</Text></Text>
      <Text style={styles.text}>Nhập mã gồm 5 chữ số từ SMS của bạn.</Text>
      {
        wrong ?
          <View style={{ width: "90%", alignItems: 'center', marginTop: '2%', marginBottom: '-2%' }}>
            <Text style={{ color: Colors.RED }}>Vui lòng nhập mã hợp lệ.</Text>
            {/* <Icon name="exclamation-circle" color={Colors.RED} size={22} style={{alignSelf: "flex-end"}}/> */}
          </View> : null
      }

      <View style={styles.inputContainer}>
        <Text style={styles.title}>FB-</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setCode(text)}
          keyboardType="phone-pad"
          textContentType='telephoneNumber'
          autoFocus={true}
          selectionColor={Colors.BLUE}
          onSubmitEditing={() => submit()}
        ></TextInput>
      </View>
      <TouchableOpacity onPress={() => submit()} activeOpacity={0.8}>
        <ConfirmButton />
      </TouchableOpacity>
      <View
        style={{
          width: '96%',
          borderBottomColor: '#EBE6E5',
          borderBottomWidth: 1,
          marginBottom: '3%',
        }}
      ></View>
      <TouchableOpacity onPress={() => submit()} activeOpacity={0.8}>
        <CannotGetCodeButton />
      </TouchableOpacity>
      <Text 
          style={{color: '#7D7164', marginTop: '5%', fontSize: 16,}}
          // onPress={() => }
        >Đăng xuất</Text>
    </View>
  );
}


export default Signup8;