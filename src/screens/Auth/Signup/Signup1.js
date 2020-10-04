import React from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet, onPress, Alert} from 'react-native';

export default function Signup1({navigation}) {

  const createTwoButtonAlert = () =>
  Alert.alert(
    "Bạn có muốn dừng tạo tài khoản không?",
    "Nếu dừng bây giờ, bạn sẽ mât toàn bọ tiến trình cho đến nay.",
    [
      {
        text: "Tiếp tục tạo tài khoản",
        onPress: () => console.log("Cancel Pressed"),
        style: "contin",
      },
      { text: "Dừng tạo tài khoản ", onPress: () => navigation.navigate('Login') }
    ],
    { cancelable: false }
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
          Chúng tôi sẽ giúp bạn tạo tài khoản mới sau vài bước dễ dàng 
        </Text>
        <TouchableOpacity 
        style={styles.buttonContainer} 
        onPress={() => navigation.navigate('Name')}
        >
          <Text style={styles.textButton}> Tiếp </Text>
        </TouchableOpacity>
        <Text style={styles.text3} onPress={createTwoButtonAlert}>
          Bạn đã có tài khoản?
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    // justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFF',
    // position:'relative'
  },
  image:{
    marginTop:'5%',
  },
  text1:{
    marginTop:'7%',
    fontSize:18,
    fontWeight:"700",
  },  
  text2:{
    marginTop:'2%',
    fontSize:15,
    marginHorizontal:30,
    textAlign:'center',
    lineHeight:20,
    color:'#666'
  },
  textButton:{
    fontSize:18,
    fontWeight:"600",
    alignItems:'center',
    color:'#fff',
  },
  buttonContainer: {
    marginTop:'7%',
    paddingHorizontal:150,
    paddingVertical:11,
    backgroundColor:'#1878f3',
    borderRadius:5,
  },
  text3:{
    position:'absolute',
    bottom:'1.5%',
    color:'#1878f3',
    fontWeight:"700",
    fontSize:15,
  },
  // inputContainer:{
  //   flexDirection:'row',
  //   marginTop:'8%',
  //   marginBottom:'8%',
  //   justifyContent:'space-between'
  // },  
  // textInput:{
  //   width:'43%',
  //   height:40,
  //   fontSize:18,
  //   backgroundColor:'#fff',
  //   borderBottomColor: focus == 1 ? '#1878f3':'#ccc',
  //   borderBottomWidth: focus == 1 ? 2 : 1,
  //   marginHorizontal:5,
  //   paddingHorizontal:10,
  //   paddingVertical:0,
  // },
  // textInput2:{
  //   width:'43%',
  //   height:40,
  //   fontSize:18,
  //   backgroundColor:'#fff',
  //   borderBottomColor: focus == 2 ? '#1878f3':'#ccc',
  //   borderBottomWidth: focus == 2 ? 2 : 1,
  //   marginHorizontal:5,
  //   paddingHorizontal:10,
  //   paddingVertical:0,
  // },
  inputFocused:{
    borderBottomColor:'#000',
    borderRightColor:'#000',
    borderRightWidth:2,
  },
  contin:{
    color:'blue',
    fontSize:20,
  }
})