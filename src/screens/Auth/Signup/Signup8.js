import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Colors from '../../../assets/Colors';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {requestCreateUser} from '../../../redux/actions/signupAction';
import {requestAuthenticateUser} from '../../../redux/actions/loginAction';

function Signup8({route, register, login, signup}) {
  const [isModalVisible, setModalVisible] = useState(true);
  useEffect(() => {
    if (register != null && register.result.success) {
      login({
        telephone: route.params.telephone,
        password: route.params.password,
      });
    }
  }, [register]);

  const submit = () => {
    setModalVisible(false);
    const param = {
      ...route.params,
      uuid: '123',
    };
    console.log('param: ', param);
    signup(param);
  };

  return (
    <View style={styles.container}>
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={{flex: 1, marginTop: '5%', width: '80%'}}>
          <Text style={styles.title}>
            Nhớ số điện thoại và mật khẩu của bạn
          </Text>
          <Text style={styles.subtitle}>
            Bạn cần nhập thông tin này vào lần đăng nhập sau.
          </Text>
          <Text style={styles.smalltext}>Số điện thoại</Text>
          <Text style={styles.infotext}>{route.params.telephone}</Text>
          <Text style={styles.smalltext}>Mật khẩu</Text>
          <Text style={styles.infotext}>{route.params.password}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={submit}
            activeOpacity={0.8}>
            <Text style={styles.textButton}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
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
    color: Colors.BLACK,
    fontWeight: 'bold',
    marginTop: '2%',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.DARKGRAY,
    marginTop: '10%',
  },
  smalltext: {
    fontSize: 14,
    marginTop: '10%',
    color: Colors.GRAY,
  },
  infotext: {
    fontSize: 16,
    color: Colors.BLACK,
    marginTop: '3%',
    backgroundColor: Colors.WHITESMOKE,
    padding: '5%',
    paddingRight: '5%',
    alignSelf: 'flex-start',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textButton: {
    fontSize: 17,
    color: Colors.WHITE,
  },
  button: {
    width: '100%',
    height: 44,
    backgroundColor: Colors.BLUE,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3%',
    marginTop: '15%',
  },
});

const mapStateToProps = (state) => state;

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
const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup8);
export default SignupContainer;
