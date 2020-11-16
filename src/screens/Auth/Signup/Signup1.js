import React from 'react';
import {View, Text, Image, StyleSheet, Alert, StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Colors from '../../../assets/Colors';
import Button from '../../../components/NextButton';

export default function Signup1({navigation}) {

  const createAlert = () =>
  Alert.alert(
    "Bạn có muốn dừng tạo tài khoản không?",
    "Nếu dừng bây giờ, bạn sẽ mât toàn bộ tiến trình cho đến nay.",
    [
      {
        text: "Dừng tạo tài khoản",
        onPress: () => navigation.navigate('Login'),
      },
      { 
        text: "Tiếp tục tạo tài khoản ",
        style: 'cancel'
      }
    ],
    { cancelable: true }
  );


  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('./images/signup.png')}/>
        <Text style={styles.text1}>Tham gia Fakebook</Text>
        <Text style={styles.text2}>Chúng tôi sẽ giúp bạn tạo tài khoản mới sau vài bước dễ dàng.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Name")} activeOpacity={0.8}>
          <Button />
        </TouchableOpacity>
        <Text style={styles.text3} onPress={createAlert}>Bạn đã có tài khoản?</Text>
        <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  image: {
    marginTop:'5%',
  },
  text1: {
    marginTop: '14%',
    fontSize: 18,
    fontWeight: "bold",
  },  
  text2: {
    marginTop:'4%',
    fontSize: 14,
    width: "90%",
    textAlign:'center',
    lineHeight: 20,
    color: Colors.DARKGRAY,
    marginBottom: '12%',
  },
  text3: {
    position:'absolute',
    bottom:'1.5%',
    color: Colors.BLUE,
    fontWeight: "bold",
    fontSize: 14,
  },
})