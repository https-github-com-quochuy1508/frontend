import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as Colors from '../../../assets/Colors'
import Button from '../../../components/NextButton';
import Icon from 'react-native-vector-icons/FontAwesome';


function Signup7({ navigation, route }) {
  const [wrong, setWrong] = useState(false);
  const [code, setCode] = useState("");

  const submit = () => {
    let regex = new RegExp(/^\d{5}$/);
    if (regex.test(code)) {
      setWrong(false);
      navigation.navigate("Waiting", route.params )
    } else {
      setWrong(true);
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.normalText}> Chúng tôi đã gửi SMS kèm mã tới <Text style={styles.text}>{route.params.telephone}</Text></Text>
      <Text style={styles.text}>Nhập mã gồm 5 chữ số từ SMS của bạn.</Text>
      { wrong ?
        <View style={styles.wrong}>
          <Text style={{ color: Colors.RED }}>Vui lòng nhập mã hợp lệ.</Text>
          <Icon name="exclamation-circle" color={Colors.RED} size={22} style={{alignSelf: "flex-end", position: "absolute"}}/>
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
        />
      </View>
      <TouchableOpacity onPress={() => submit()} activeOpacity={0.8}>
        <Button type="confirm"/>
      </TouchableOpacity>
      <View
        style={{
          width: '96%',
          borderBottomColor: Colors.WHITESMOKE,
          borderBottomWidth: 2,
          marginBottom: '3%',
          marginTop: '3%',
        }}
      ></View>
      <TouchableOpacity activeOpacity={0.8}>
        <Button type="refuse" />
      </TouchableOpacity>
      <Text 
          style={styles.logout}
          onPress={() => navigation.navigate("Login")}
        >Đăng xuất</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center'
  },
  wrong: {
    width: "90%", 
    alignItems: 'center', 
    marginTop: '2%'
  },
  inputContainer: {
    width: "90%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: "5%",
    marginTop: "4%",
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: "1%",
    marginBottom: "0%"
  },
  normalText: {
    fontSize: 16,
    marginTop: "5%",
  },
  title: {
    fontSize: 24,
    color: Colors.BLACK,
    fontWeight: 'bold',
    marginTop: "4%"
  },
  textInput: {
    fontSize: 20,
    fontWeight: 'bold',
    width: "35%",
    borderColor: Colors.LIGHTGRAY,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: "4%",
    marginLeft: "1%",
  },
  logout: {
    color: Colors.BLUE, 
    marginTop: '5%', 
    fontSize: 16
  }
});

export default Signup7;