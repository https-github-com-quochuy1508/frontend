import React, { useState } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Pressable, TouchableHighlight, Button } from "react-native";
import Fea from 'react-native-vector-icons/Feather';
import Ent from 'react-native-vector-icons/Entypo';
import Sim from 'react-native-vector-icons/SimpleLineIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import Fon from 'react-native-vector-icons/Fontisto';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Mat from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import * as Colors from '../../../assets/Colors';

export default function Chat() {
    const [press, setPress] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.titleWrap}>
                <Text style={styles.title}>Ảnh đại diện</Text>
                <Pressable style={[styles.editBtn,
                { backgroundColor: press == 1 ? Colors.GAINSBORO : Colors.WHITE },
                ]}
                    onTouchStart={() => setPress(1)}
                    onTouchEnd={() => setPress(0)}
                    onPressOut={() => setPress(0)}
                >
                    <Text style={styles.editText}>Chỉnh sửa</Text>
                </Pressable>
            </View>
            <Pressable style={{ justifyContent: 'center', }}
                onTouchStart={() => setPress(2)}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => setPress(0)}>
                <Image style={[styles.avatar]}
                    source={{ uri: "https://scontent-sin6-1.xx.fbcdn.net/v/t1.15752-9/130720265_169936591506039_5571318822476082269_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=B7jb8LKVm9AAX_iKd3V&_nc_ht=scontent-sin6-1.xx&oh=4fcda1e478e529511fa48c6397ff35b1&oe=5FF7AAB2" }} />
            </Pressable>
            <View style={styles.line}></View>
            <View style={[styles.titleWrap, styles.borderWrap]}>
                <Text style={styles.title}>Ảnh bìa</Text>
                <Pressable style={[styles.editBtn,
                { backgroundColor: press == 3 ? Colors.GAINSBORO : Colors.WHITE },
                ]}
                    onTouchStart={() => setPress(3)}
                    onTouchEnd={() => setPress(0)}
                    onPressOut={() => setPress(0)}
                >
                    <Text style={styles.editText}>Chỉnh sửa</Text>
                </Pressable>
            </View>
            <Pressable style={{ justifyContent: 'center', }}
                onTouchStart={() => setPress(4)}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => setPress(0)}>
                <Image style={styles.cover} source={{ uri: "https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg" }} />
            </Pressable>
            <View style={styles.line}></View>
            <View style={[styles.titleWrap, styles.borderWrap]}>
                <Text style={styles.title}>Chi tiết</Text>
                <Pressable style={[styles.editBtn,
                { backgroundColor: press == 4 ? Colors.GAINSBORO : Colors.WHITE },
                ]}
                    onTouchStart={() => setPress(4)}
                    onTouchEnd={() => setPress(0)}
                    onPressOut={() => setPress(0)}
                >
                    <Text style={styles.editText}>Chỉnh sửa</Text>
                </Pressable>
            </View>
            <Text style={styles.infoText}><FA5 name='home' size={20} color={'#8a8d92'} />  Sống tại <Text style={{ fontWeight: 'bold' }}>Hà Nội</Text></Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.WHITE,
    },

    infoText: {
        paddingTop: 12,
        paddingBottom: 12,
        fontSize: 18,
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
    },

    cover: {
        width: '92%',
        height: 200,
        marginTop: 15,
        marginLeft: '4%',
        marginRight: '4%',
        borderRadius: 10,
    },

    line: {
        marginTop: '4%',
        borderTopWidth: 1,
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
        borderTopColor: '#e5e6eb',
    },

    editBtn: {
        position: 'absolute',
        right: 0,
        padding: 5,
        borderRadius: 5,
    },

    editText: {
        fontSize: 17,
        color: Colors.AZURE91,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    titleWrap: {
        flexDirection: 'row',
        marginTop: '4%',
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
    },

    avatar: {
        marginTop: '4%',
        alignSelf: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
    }

});
