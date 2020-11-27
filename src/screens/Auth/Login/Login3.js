import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TextInput, Image, Pressable, KeyboardAvoidingView, Alert} from 'react-native';
import * as Colors from '../../../assets/Colors'
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {requestAuthenticateUser} from '../../../redux/actions/loginAction';

function Login3({login, users}) {
    const [password, setPassword] = useState("");
    const [press, setPress] = useState(0);
    const [show, setShow] = useState(false);
    const [avt, setAvt] = useState(" ");
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");

    const getData = async () => {
        try {
          const avt = await AsyncStorage.getItem('avatar')
          const name = await AsyncStorage.getItem('name')
          const tel = await AsyncStorage.getItem('telephone')
          if(avt !== null && name !== null && tel !== null) {
            setAvt(avt);
            setName(name);
            setTelephone(tel);
          }
        } catch(e) {
          // error reading value
        }
      }
    
    useEffect(() => {
        getData();
    })

    useEffect(() => {
        if (users != null && users.result != null && !users.result.success)
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
    }, [users]);

    const submit = () => {
        const param = {
            telephone: telephone,
            password: password,
        };
        login(param);
    };
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.content}>
                <Image 
                    style={{width: 75, height: 75, marginBottom: 10, borderRadius: 38}}
                    source={{uri: avt}}
                />
                <Text>{name}</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input, {width: password.length > 0 ? (show ? 292 : 257) : 320}]}
                        autoFocus={true}
                        placeholder="Mật khẩu"
                        placeholderTextColor={Colors.GRAY}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={!show}
                    />
                    {password.length > 0 ?
                        <Pressable 
                            style={[styles.show, {backgroundColor: press == 2 ? Colors.WHITESMOKE : Colors.WHITE}]}
                            onPress={() => setShow(!show)}
                            onTouchStart = {() => {setPress(2)}}
                            onTouchEnd = {() => {setPress(0)}}
                            onPressOut={() => setPress(0)}
                        >
                            <Text style={{fontWeight: 'bold', fontSize: 12}}>{show ? "ẨN" : "HIỂN THỊ"}</Text>
                        </Pressable> : <View/>
                    }
                </View>
                <Pressable 
                    style={styles.button} 
                    disabled={password.length == 0} 
                    onPress={() => submit()}
                >
                    <Text style={[styles.buttonText, {opacity: password.length > 0 ? 1 : 0.5}]}>ĐĂNG NHẬP</Text>
                </Pressable>
                <Pressable 
                    style={[styles.forgot, {backgroundColor: press == 1 ? Colors.WHITESMOKE : Colors.WHITE}]} 
                    onTouchStart={()=>{setPress(1)}} 
                    onTouchEnd={()=>{setPress(0)}} 
                    onPressOut={() => setPress(0)}
                >
                    <Text style={styles.forgotText}>Quên mật khẩu?</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: 'row', 
        marginTop: 20,
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.LIGHTGRAY,
        fontSize: 18,
    },
    show: { 
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        paddingHorizontal: 5,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.BLUE,
        marginTop: 15,
        marginBottom: 35,
        width: 320,
        height: 40,
        borderRadius: 4,
    },
    buttonText: {
        color: Colors.WHITE, 
        fontWeight: "bold",
    },
    forgot: {
        borderRadius: 5,
        paddingHorizontal: 5,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    forgotText: {
        color: Colors.BLUE, 
        fontWeight: "bold"
    },
})

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    login: (params) => {
      dispatch(requestAuthenticateUser(params));
    },
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login3);
export default LoginContainer;