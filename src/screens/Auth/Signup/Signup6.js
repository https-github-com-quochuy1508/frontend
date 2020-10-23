import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {connect} from 'react-redux';
import {requestCreateUser} from '../../../redux/actions/signupAction';
import {requestAuthenticateUser} from '../../../redux/actions/loginAction';
import * as Colors from '../../../assets/Colors'
import Button from '../../../components/NextButton';


function Signup6({route, is, login, signup}) {
  
  useEffect(() => {
    if(is.result.success) {
      const param = {
        telephone: route.params.phone,
        password: route.params.password,
      }
      login(param);
    }
  },[is])
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.WHITE,
      alignItems: 'center'
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: "13%",
      marginBottom: "4%"
    },
    text: {
      textAlign: "center",
      width: "91%",
      color: Colors.DARKGRAY,
      lineHeight: 19
    },
    text2: {
      textAlign: "center",
      width: "90%",
      color: Colors.DARKGRAY,
      lineHeight: 16,
      position: "absolute",
      bottom: 12,
      fontSize: 12
    }
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoàn tất đăng ký</Text>
      <Text style={styles.text}>Bằng cách nhấn vào Đăng ký, bạn đồng ý với
        <Text 
          style={{color: Colors.BLUE}}
          onPress={() => Linking.openURL("https://m.facebook.com/legal/terms/update")}
        > Điều khoản</Text>,
        <Text 
          style={{color: Colors.BLUE}}
          onPress={() => Linking.openURL("https://m.facebook.com/about/privacy/update")}
        > Chính sách dữ liệu</Text> và
        <Text 
          style={{color: Colors.BLUE}}
          onPress={() => Linking.openURL("https://m.facebook.com/legal/terms/update")}
        > Chính sách cookie</Text> của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và chọn không nhận bất kỳ lúc nào.</Text>
      <Text style={styles.text}>Thông tin từ danh bạ của bạn sẽ được tải lên Fakebook liên tục để chúng tôi có thể gợi ý bạn bè, cung cấp và cải thiện quảng cáo cho bạn và người khác, cũng như mang đến dịch vụ tốt hơn.</Text>
      <TouchableOpacity 
        activeOpacity={0.8} 
        style={{marginTop: "15%"}}
        onPress={() => {
          const param = {
            name: route.params.name,
            birthday: "1999-10-30",
            telephone: route.params.phone,
            password: route.params.password,
            token: "123"
          }
          signup(param);
        }}
      >
        <Button done={true}/>
      </TouchableOpacity>
      <Text style={styles.text2}>Thông tin liên hệ trong danh bạ của bạn, bao gồm tên, số điện thoại và biệt danh, sẽ được gửi tới Facebook để chúng tôi có thể gợi ý bạn bè, cung cấp và cải thiện quảng cáo cho bạn và người khác, cũng như mang đến dịch vụ tốt hơn. Bạn có thể tắt tính năng này trong phần Cài đặt, quản lý hoặc xóa bỏ thông tin liên hệ của mình đã chia sẻ với Fakebook.
        <Text style={{color: Colors.BLUE}}> Tìm hiểu thêm</Text>
      </Text>
    </View>
  );
}

const mapStateToProps = (state) => {
  let is = state.is
  return {is};
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (params) => {
      dispatch(requestCreateUser(params));
    },
    login: (params) => {
      dispatch(requestAuthenticateUser(params));
    },
  };
};
const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup6);
export default SignupContainer;