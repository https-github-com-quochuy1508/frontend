import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, StatusBar, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
import * as Colors from '../../../assets/Colors';
import AsyncStorage from '@react-native-community/async-storage';

export default function Login2({navigation}) {
    const [press, setPress] = useState(0);
    const [avt, setAvt] = useState(" ");
    const [name, setName] = useState("");

    const getData = async () => {
        try {
          const avt = await AsyncStorage.getItem('avatar')
          const name = await AsyncStorage.getItem('name')
          if(avt !== null && name !== null) {
            setAvt(avt);
            setName(name)
          }
        } catch(e) {
          // error reading value
        }
      }
    
    useEffect(() => {
        getData();
    })

    return(
        <View style={styles.container}>
            <Image 
                style={{width: 50, height: 50}}
                source={{uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"}}
            />
            <View style={{width: "100%"}}>
                <Pressable 
                    style={[styles.account, {backgroundColor: press == 1 ? Colors.WHITESMOKE : Colors.WHITE}]}
                    onPress={() => navigation.navigate('Login3')}
                    onTouchStart={() => setPress(1)}
                    onTouchEnd={() => setPress(0)}
                    onPressOut={() => setPress(0)}
                >
                    <Image 
                        style={{width: 60, height: 60, marginLeft: 35, borderRadius: 30}}
                        source={{uri: avt}}
                    />
                    <Text style={styles.name}>{name}</Text>
                    <Icon name="dots-three-vertical" size={15} style={{position:'absolute', right: 30}}/>
                </Pressable>
                <Pressable 
                    style={[styles.another, {backgroundColor: press == 2 ? Colors.WHITESMOKE : Colors.WHITE}]} 
                    onPress={() => navigation.navigate('Login')}
                    onTouchStart={() => {setPress(2)}}
                    onTouchEnd={() => setPress(0)}
                    onPressOut={() => setPress(0)}
                >
                    <View style={styles.icon}>
                        {
                            press == 2 ?
                            <Icon name="plus" size={23} color={Colors.BLUE}/>
                            :
                            <Icon2 name="add" size={23} color={Colors.BLUE}/>
                        }
                    </View>
                    <Text style={styles.anotherText}>Đăng nhập bằng tài khoản khác</Text>
                </Pressable>
                <Pressable 
                    style={[styles.find, {backgroundColor: press == 3 ? Colors.WHITESMOKE : Colors.WHITE}]}
                    onTouchStart={() => setPress(3)}
                    onTouchEnd={() => setPress(0)}
                    onPressOut={() => setPress(0)}
                >
                    <View style={styles.icon}>
                        <Icon2 name={press == 3 ? "search-sharp" : "search-outline"} size={20} color={Colors.BLUE}/>
                    </View>
                    <Text style={styles.anotherText}>Tìm tài khoản</Text>
                </Pressable>
            </View>
            <Pressable 
                style={[styles.button, {backgroundColor: press == 4 ? Colors.WHITESMOKE : Colors.SLATEGRAY}]} 
                onPress={() => navigation.navigate('Signup')}
                onTouchStart={() => setPress(4)}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => setPress(0)}
            >
                <Text style={styles.signup}>TẠO TÀI KHOẢN FAKEBOOK MỚI</Text>
            </Pressable>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content"/>
        </View>
    )
}

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
    },
    find: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
    },
    anotherText: {
        fontWeight: 'bold', 
        color: Colors.BLUE, 
        marginLeft: 15
    },
    icon: {
        backgroundColor: Colors.SLATEGRAY, 
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
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        position: 'absolute',
        bottom: 30,
    },
    signup: {
        color: Colors.BLUE,
        fontWeight: 'bold',
    }
})