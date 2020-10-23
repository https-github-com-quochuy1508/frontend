import React, { useState, useEffect} from 'react'
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native'
import DatePicker from 'react-native-date-picker'
import * as Colors from '../../../assets/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../../components/NextButton';

export default function Signup3 ({navigation, route}) {
  const current = new Date();
  const [date, setDate] = useState(new Date())
  const [wrong, setWrong] = useState(false);

  const submit = () => {
    let age = current.getFullYear() - date.getFullYear()
    if(age > 5) {
      setWrong(false);
      navigation.navigate("Phone", {
        name: route.params.name,
        birth: date.getTime()
      });
    } else {
      setWrong(true);
    }
  }
  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
        Alert.alert(
          "Bạn có muốn dừng tạo tài khoản không?",
          "Nếu dừng bây giờ, bạn sẽ mât toàn bộ tiến trình cho đến nay.",
          [
            {
              text: "Dừng tạo tài khoản",
              style: "destructive",
              onPress: () => navigation.dispatch(e.data.action),
            },
            { 
              text: "Tiếp tục tạo tài khoản ",
              style: 'cancel'
            }
          ],
          { cancelable: true }
        );
      }),
    [navigation]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sinh nhật của bạn khi nào?</Text>
      {
        wrong ? 
        (<View style={styles.wrong}>
          <Text style={{color: Colors.RED}}>Có vẻ như bạn đã nhập thông tin sai. Hãy đảm</Text>
          <Text style={{color: Colors.RED}}>bảo sử dụng ngày sinh thật của mình.</Text>
          <Icon name="exclamation-circle" color={Colors.RED} size={22} style={styles.icon}/>
        </View>) : null
      }
      <DatePicker
        date={date}
        onDateChange={(date) => setDate(date)}
        androidVariant="nativeAndroid"
        mode="date"
        maximumDate={current}
        style={{marginBottom: "19%"}}
      />
      <TouchableOpacity onPress={() => submit()} activeOpacity={0.8}>
        <Button/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: "20%",
    marginBottom: "4%"
  },
  wrong :{
    width: "95%", 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  icon: {
    position: 'absolute', 
    bottom: 0,
    right: 0
  } 
})