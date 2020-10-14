import React, { useState, useEffect} from 'react'
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native'
import DatePicker from 'react-native-date-picker'
import * as Colors from '../../../assets/Colors'

export default function Signup3 ({navigation, route}) {

  const [date, setDate] = useState(new Date())

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

  const current = new Date();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sinh nhật của bạn khi nào?</Text>
      <DatePicker
        date={date}
        onDateChange={(date) => setDate(date)}
        androidVariant="nativeAndroid"
        mode="date"
        maximumDate={current}
      />
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("Gender")}
        activeOpacity={0.8}
      >
        <Text style={styles.textButton}>Tiếp</Text>
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
  textButton: {
    fontSize: 14,
    alignItems:'center',
    color: Colors.WHITE,
  },
  button: {
    width: "90%",
    height: 44,
    backgroundColor: Colors.BLUE,
    borderRadius:6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "19%"
  },
})