import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  Keyboard,
  Pressable,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {requestAuthenticateUser} from '../../../redux/actions/loginAction';
import * as Colors from '../../../assets/Colors';

function Login({navigation, login, users}) {
  const [focus, setFocus] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [press, setPress] = useState(0);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setShowImage(false);
  };

  const _keyboardDidHide = () => {
    setShowImage(true);
  };

  useEffect(() => {
    if (users != null && users.result != null)
      switch (users.result.code) {
        case 500:
          Alert.alert(
            'Không thể tìm tài khoản',
            'Có vẻ như ' +
              user +
              ' không khớp với tài khoản hiện tại. Nếu chưa có tài khoản Fakebook, bạn có thể tạo một tài khoản ngay bây giờ.',
            [
              {
                text: 'TẠO TÀI KHOẢN',
                onPress: () => navigation.navigate('Signup'),
              },
              {
                text: 'THỬ LẠI',
                style: 'cancel',
              },
            ],
            {cancelable: true},
          );
          break;
        case 1001:
          Alert.alert(
            'Sai mật khẩu',
            'Mật khẩu bạn vừa nhập không chính xác. Vui lòng thử lại hoặc lấy mã để đăng nhập.',
            [
              {
                text: 'LẤY MÃ',
              },
              {
                text: 'OK',
                style: 'cancel',
              },
            ],
            {cancelable: true},
          );
          break;
      }
  }, [users]);

  const submit = () => {
    const param = {
      telephone: user,
      password: password,
    };
    login(param);
  };
  return (
    <View style={styles.container}>
      {showImage ? (
        <Image
          style={{height: 200, marginBottom: 90}}
          source={{
            uri:
              'https://raw.githubusercontent.com/ihsaninh/facebook-clone-react-native/master/src/img/banner.png',
          }}
          resizeMode="cover"
        />
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 210,
            paddingTop: 25,
          }}>
          <Image
            style={{height: 65, width: 65}}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
            }}
          />
        </View>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: press == 1 ? Colors.WHITESMOKE : Colors.WHITE,
              borderBottomColor: focus == 1 ? Colors.BLUE : Colors.LIGHTGRAY,
              borderBottomWidth: focus == 1 ? 2 : 0.8,
            },
          ]}
          placeholder="Số điện thoại hoặc email"
          placeholderTextColor={Colors.GRAY}
          returnKeyType="next"
          onFocus={() => setFocus(1)}
          onChangeText={(text) => {
            setUser(text);
          }}
          onTouchStart={() => {
            setPress(1);
          }}
          onTouchEnd={() => {
            setPress(0);
          }}
        />
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: press == 2 ? Colors.WHITESMOKE : Colors.WHITE,
              borderBottomColor: focus == 2 ? Colors.BLUE : Colors.LIGHTGRAY,
              borderBottomWidth: focus == 2 ? 2 : 0.8,
            },
          ]}
          placeholder="Mật khẩu"
          placeholderTextColor={Colors.GRAY}
          secureTextEntry={true}
          onFocus={() => setFocus(2)}
          onChangeText={(text) => {
            setPassword(text);
          }}
          onTouchStart={() => {
            setPress(2);
          }}
          onTouchEnd={() => {
            setPress(0);
          }}
          onSubmitEditing={() => submit()}
        />
        <Pressable
          style={styles.button}
          disabled={user.length == 0 || password.length == 0}
          onPress={() => submit()}>
          <Text
            style={[
              styles.buttonText,
              {opacity: user.length > 0 && password.length > 0 ? 1 : 0.5},
            ]}>
            Đăng nhập
          </Text>
        </Pressable>
        {showImage ? (
          <View style={{alignItems: 'center'}}>
            <Pressable
              style={[
                styles.forgot,
                {backgroundColor: press == 3 ? Colors.GAINSBORO : Colors.WHITE},
              ]}
              onTouchStart={() => {
                setPress(3);
              }}
              onTouchEnd={() => {
                setPress(0);
              }}>
              <Text style={styles.forgotText}>Quên mật khẩu?</Text>
            </Pressable>
            <View style={styles.orContainer}>
              <Text style={{color: Colors.LIGHTGRAY}}>─────────────</Text>
              <Text style={{color: '#696969', fontSize: 12}}> HOẶC </Text>
              <Text style={{color: Colors.LIGHTGRAY}}>─────────────</Text>
            </View>
            <Pressable
              style={styles.button2}
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              <Text style={styles.buttonText}>Tạo tài khoản Fakebook mới</Text>
            </Pressable>
          </View>
        ) : (
          <Pressable
            style={[
              styles.newBox,
              {backgroundColor: press == 3 ? Colors.GAINSBORO : Colors.WHITE},
            ]}
            onPress={() => navigation.navigate('Signup')}
            onTouchStart={() => {
              setPress(3);
            }}
            onTouchEnd={() => {
              setPress(0);
            }}>
            <Text style={styles.new}>Tạo tài khoản Fakebook mới</Text>
          </Pressable>
        )}
      </View>
      <StatusBar
        backgroundColor={showImage ? '#2e4b8a' : Colors.WHITE}
        barStyle="light-content"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: 320,
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BLUE,
    marginTop: 20,
    marginBottom: 10,
    width: 320,
    height: 40,
    borderRadius: 4,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgot: {
    borderRadius: 5,
    width: 150,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newBox: {
    borderRadius: 5,
    width: 220,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotText: {
    color: Colors.BLUE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  new: {
    color: Colors.BLUE,
    fontSize: 13,
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 65,
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GREEN,
    marginTop: 65,
    marginBottom: 10,
    width: 240,
    height: 35,
    borderRadius: 4,
  },
});

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    login: (params) => {
      dispatch(requestAuthenticateUser(params));
    },
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;
