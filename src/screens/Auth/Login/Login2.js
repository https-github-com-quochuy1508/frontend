import React, {useState} from 'react';
import {View, StyleSheet, Text, StatusBar, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';

export default function Login2({navigation}) {
    const [press, setPress] = useState(0);
    const WHITE = "#FFFFFF";
    const BLUE = "#3f77f3";
    const SLATE_GRAY = "rgba(198, 226, 255, 0.4)";
    const WHITE_SMOKE = "#F5F5F5";
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff'
        },
        account: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: press == 1 ? WHITE_SMOKE : WHITE,
        },
        name: {
            fontWeight: 'bold',
            marginLeft: 15,
            fontSize: 15,
        },
        another: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 8,
            paddingBottom: 8,
            backgroundColor: press == 2 ? WHITE_SMOKE : WHITE,
        },
        find: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 8,
            paddingBottom: 8,
            backgroundColor: press == 3 ? WHITE_SMOKE : WHITE,
        },
        anotherText: {
            fontWeight: 'bold', 
            color: BLUE, 
            marginLeft: 15
        },
        icon: {
            backgroundColor: SLATE_GRAY, 
            borderRadius: 6,
            height: 28,
            width: 28,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 35,
        },
        button: {
            width: 320,
            height: 38,
            backgroundColor: press == 4 ? WHITE_SMOKE : SLATE_GRAY,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            position: 'absolute',
            bottom: 30,
        },
        signup: {
            color: BLUE,
            fontWeight: 'bold',
        }
    })

    return(
        <View style={styles.container}>
            <Image 
                style={{width: 50, height: 50}}
                source={{uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"}}
            />
            <View style={{width: "100%"}}>
                <Pressable 
                    style={styles.account}
                    onPress={() => navigation.navigate('Login3')}
                    onTouchStart={() => setPress(1)}
                    onTouchEnd={() => setPress(0)}
                    onPressOut={() => setPress(0)}
                >
                    <Image 
                        style={{width: 60, height: 60, marginLeft: 35}}
                        source={{uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"}}
                    />
                    <Text style={styles.name}>Phạm Đình Thắng</Text>
                    <Icon name="dots-three-vertical" size={15} style={{position:'absolute', right: 30}}/>
                </Pressable>
                <Pressable 
                    style={styles.another} 
                    onPress={() => navigation.navigate('Login')}
                    onTouchStart={() => {setPress(2)}}
                    onTouchEnd={() => setPress(0)}
                    onPressOut={() => setPress(0)}
                >
                    <View style={styles.icon}>
                        {
                            press == 2 ?
                            <Icon name="plus" size={23} color={BLUE}/>
                            :
                            <Icon2 name="add" size={23} color={BLUE}/>
                        }
                    </View>
                    <Text style={styles.anotherText}>Đăng nhập bằng tài khoản khác</Text>
                </Pressable>
                <Pressable 
                    style={styles.find}
                    onTouchStart={() => setPress(3)}
                    onTouchEnd={() => setPress(0)}
                    onPressOut={() => setPress(0)}
                >
                    <View style={styles.icon}>
                        <Icon2 name={press == 3 ? "search-sharp" : "search-outline"} size={20} color={BLUE}/>
                    </View>
                    <Text style={styles.anotherText}>Tìm tài khoản</Text>
                </Pressable>
            </View>
            <Pressable 
                style={styles.button} 
                onPress={() => navigation.navigate('Signup')}
                onTouchStart={() => setPress(4)}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => setPress(0)}
            >
                <Text style={styles.signup}>TẠO TÀI KHOẢN FAKEBOOK MỚI</Text>
            </Pressable>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
        </View>
    )
}