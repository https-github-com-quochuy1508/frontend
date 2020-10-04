import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Image, Pressable, KeyboardAvoidingView} from 'react-native';

export default function Login3() {
    const [password, setPassword] = useState("");
    const [press, setPress] = useState(0);
    const [show, setShow] = useState(false);
    const WHITE = "#FFFFFF";
    const GRAY = "#999999";
    const LIGHT_GRAY = "#BEBEBE";
    const BLUE = "#3f77f3";
    const WHITE_SMOKE = "#F5F5F5";


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: WHITE,
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
            borderColor: LIGHT_GRAY,
            fontSize: 18,
            width: password.length > 0 ? (show ? 292 : 257) : 320,
        },
        show: {
            backgroundColor: press == 2 ? WHITE_SMOKE : WHITE, 
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            paddingHorizontal: 5,
        },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: BLUE,
            marginTop: 15,
            marginBottom: 35,
            width: 320,
            height: 40,
            borderRadius: 4,
        },
        buttonText: {
            color: WHITE, 
            fontWeight: "bold",
            opacity: password.length > 0 ? 1 : 0.5,
        },
        forgot: {
            backgroundColor: press == 1 ? WHITE_SMOKE : WHITE,
            borderRadius: 5,
            paddingHorizontal: 5,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center'
        },
        forgotText: {
            color: BLUE, 
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
                        placeholderTextColor={GRAY}
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