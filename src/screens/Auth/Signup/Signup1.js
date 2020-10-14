import React from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet, Alert} from 'react-native';
import * as Colors from '../../../assets/Colors'

export default function Signup1({navigation}) {

  const createTwoButtonAlert = () =>
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
        <Image
        style={styles.image}
        source={require('./images/signup.png')}
        ></Image>
        <Text style={styles.text1}>
          Tham gia Fakebook
        </Text>
        <Text style={styles.text2}>
          Chúng tôi sẽ giúp bạn tạo tài khoản mới sau vài bước dễ dàng. 
        </Text>
        <TouchableOpacity 
          style={styles.buttonContainer} 
          onPress={() => navigation.navigate('Name')}
          activeOpacity={0.8}
        >
          <Text style={styles.textButton}>Tiếp</Text>
        </TouchableOpacity>
        <Text style={styles.text3} onPress={createTwoButtonAlert}>
          Bạn đã có tài khoản?
        </Text>
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
  },
  textButton: {
    fontSize: 14,
    alignItems:'center',
    color: Colors.WHITE,
  },
  buttonContainer: {
    marginTop: '12%',
    backgroundColor: Colors.BLUE,
    borderRadius: 5,
    width: "90%",
    height: 42,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text3: {
    position:'absolute',
    bottom:'1.5%',
    color: Colors.BLUE,
    fontWeight: "bold",
    fontSize: 14,
  },
})