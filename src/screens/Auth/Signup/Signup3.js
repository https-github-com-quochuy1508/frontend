import React from 'react';
import {View, Text,StyleSheet,Button,navigation} from 'react-native';
// import DatePicker from 'react-native-date-picker';

export default function Signup3({navigation}) {
  return (
    <View style={styles.container}>

        {/* <DatePicker
              mode="date"
              // date={01/01/2000}
              // onDateChange={02/02/2020}
              androidVariant= 'nativeAndroid'
            />  */}

        <Button
        title="Go to Signup4"
        onPress={() => navigation.navigate('Create')}
      />
      <Text>Signup3 Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFF',
    // position:'relative'
  },
  image:{
    width:300,
    height:220,
    top:'3%',
    position:'absolute',
  },
  text1:{
    marginTop:80,
    fontSize:18,
    fontWeight:"700",
  },
  text2:{
    marginTop:'5%',
    fontSize:16,
    color:'#777',
    marginHorizontal:30,
    textAlign:"center",
    lineHeight:22,
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
  text3:{
    fontWeight:"700",
    fontSize: 16,
    color:'#3178d2',
    position:'absolute',
    bottom:'1%',
  }
})