import React, { useState } from 'react';
import {View, Text,StyleSheet,Button,navigation,TouchableOpacity,TextInput} from 'react-native';

export default function Signup2({navigation}) {
  const [focus, setFocus] = useState(0);
  const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column',
      // justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#FFF',
      // position:'relative'
    },
    text1:{
      marginTop:'15%',
      fontSize:18,
      fontWeight:"700",
    },
    textButton:{
      fontSize:18,
      fontWeight:"600",
      alignItems:'center',
      color:'#fff',
    },
    buttonContainer: {
      marginTop:30,
      paddingHorizontal:150,
      paddingVertical:13,
      backgroundColor:'#1878f3',
      borderRadius:6,
    },
    inputContainer:{
      flexDirection:'row',
      marginTop:'8%',
      marginBottom:'8%',
      justifyContent:'space-between'
    },  
    textInput:{
      width:'43%',
      height:40,
      fontSize:18,
      backgroundColor:'#fff',
      borderBottomColor: focus == 1 ? '#1878f3':'#ccc',
      borderBottomWidth: focus == 1 ? 2 : 1,
      marginHorizontal:5,
      paddingHorizontal:10,
      paddingVertical:0,
    },
    textInput2:{
      width:'43%',
      height:40,
      fontSize:18,
      backgroundColor:'#fff',
      borderBottomColor: focus == 2 ? '#1878f3':'#ccc',
      borderBottomWidth: focus == 2 ? 2 : 1,
      marginHorizontal:5,
      paddingHorizontal:10,
      paddingVertical:0,
    },
    inputFocused:{
      borderBottomColor:'#000',
      borderRightColor:'#000',
      borderRightWidth:2,
    },
  })
  return (
    <View style={styles.container}>

          <Text style={styles.text1}>
            Bạn tên gì? 
          </Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}
              placeholder="Tên"
              returnKeyType='next'
              onFocus={() => { setFocus(1)}}
            >

            </TextInput>
            <TextInput style={styles.textInput2}
              placeholder="Họ"
              onFocus={ () => { setFocus(2)}}
              // returnKeyType='next'
              >

            </TextInput>
          </View>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Birth')}>
          <Text style={styles.textButton}  >
                        Tiếp
          </Text>
      </TouchableOpacity>

    </View>
  );
}

