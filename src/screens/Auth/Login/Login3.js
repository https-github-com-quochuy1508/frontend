import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Image, Pressable, KeyboardAvoidingView} from 'react-native';
import * as Colors from '../../../assets/Colors'

export default function Login3() {
    const [password, setPassword] = useState("");
    const [press, setPress] = useState(0);
    const [show, setShow] = useState(false);

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
            width: password.length > 0 ? (show ? 292 : 257) : 320,
        },
        show: {
            backgroundColor: press == 2 ? Colors.WHITESMOKE : Colors.WHITE, 
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
            opacity: password.length > 0 ? 1 : 0.5,
        },
        forgot: {
            backgroundColor: press == 1 ? Colors.WHITESMOKE : Colors.WHITE,
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
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.content}>
                <Image 
                    style={{width: 75, height: 75, marginBottom: 10}}
                    source={{uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"}}
                />
                <Text>Phạm Đình Thắng</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        autoFocus={true}
                        placeholder="Mật khẩu"
                        placeholderTextColor={Colors.GRAY}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={!show}
                    />
                    {password.length > 0 ?
                        <Pressable 
                            style={styles.show}
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
                    onPress={() => alert("Đăng nhập")}
                >
                    <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
                </Pressable>
                <Pressable 
                    style={styles.forgot} 
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