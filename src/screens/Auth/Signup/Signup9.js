import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Keyboard, TextInput, Linking } from 'react-native';
import * as Colors from '../../../assets/Colors'
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import OKButton from '../../../components/OKButton';


function Signup9({ navigation, route }) {
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
    modal: {
      flex: 1,
      backgroundColor: Colors.WHITE,
      alignItems: 'center',
      width: '80%',
      marginTop: '40%',
      marginBottom: '45%',
      marginLeft: '10%',
      borderRadius: 5,
    },

    title: {
      fontSize: 16,
      color: "#000000",
      fontWeight: 'bold',
      marginTop: "2%"
    },

    subtitle: {
      fontSize: 16,
      color: "#6D6D6F",
      marginTop: "10%"
    },

    smalltext: {
      fontSize: 14,
      marginTop: "10%",
      color: "#999999"
    },

    infotext:{
      fontSize: 16,
      color: "#000000",
      marginTop: "3%",
      backgroundColor: "#E5E6EB",
      padding: '5%',
      paddingRight: '5%',
      alignSelf: 'flex-start'
    },

    container: {
      flex: 1,
      alignItems: 'center',
    }
  });
  const [isModalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={{ flex: 1, marginTop: '5%', width: '80%' }}>
          <Text style={styles.title}>Nhớ số điện thoại và mật khẩu của bạn</Text>
          <Text style={styles.subtitle}>Bạn cần nhập thông tin này vào lần đăng nhập sau.</Text>
          <Text style={styles.smalltext}>Số điện thoại</Text>
          <Text style={styles.infotext}>0987768886</Text>
          <Text style={styles.smalltext}>Mật khẩu</Text>
          <Text style={styles.infotext}>1qasw23ed</Text>
          <TouchableOpacity onPress={toggleModal} activeOpacity={0.8}>
            <OKButton />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}


export default Signup9;