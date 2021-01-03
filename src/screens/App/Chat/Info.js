import React, { useState } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Pressable, TouchableHighlight, Button } from "react-native";
import Fea from 'react-native-vector-icons/Feather';
import Ent from 'react-native-vector-icons/Entypo';
import Sim from 'react-native-vector-icons/SimpleLineIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import Fon from 'react-native-vector-icons/Fontisto';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import FA from 'react-native-vector-icons/FontAwesome';
import Mat from 'react-native-vector-icons/MaterialCommunityIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import * as Colors from '../../../assets/Colors';

export default function Info({ navigation }) {
    const [press, setPress] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Pressable style={{ justifyContent: 'center', }}
                onTouchStart={() => setPress(1)}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => setPress(0)}>
                <Image style={[styles.avatar]}
                    source={{ uri: "https://scontent-sin6-1.xx.fbcdn.net/v/t1.15752-9/130720265_169936591506039_5571318822476082269_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=B7jb8LKVm9AAX_iKd3V&_nc_ht=scontent-sin6-1.xx&oh=4fcda1e478e529511fa48c6397ff35b1&oe=5FF7AAB2" }} />
            </Pressable>
            <Text style={styles.name}>Quân Nguyễn</Text>
            <Pressable
                style={[
                    styles.icon,
                    { backgroundColor: press == 2 ? Colors.GAINSBORO : '#f5f5f5', justifyContent: 'center', alignSelf: 'center', marginTop: '4%' },
                ]}
                onTouchStart={() => setPress(2)}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => setPress(0)}
                onPress={() => setModalVisible(true)}>
                <Ion name='person' size={22} color={Colors.BLACK} style={{ alignSelf: 'center' }}></Ion>
            </Pressable>
            <Text style={{ alignSelf: 'center' }}>Trang cá nhân</Text>
            <Text style={{ marginLeft: '4%', marginTop: '3%', color: Colors.GRAY }}>Quyền riêng tư</Text>
            <Pressable
                style={[
                    styles.lineBtn,
                    { backgroundColor: press == 3 ? '#f5f5f5' : Colors.WHITE, alignSelf: 'center', marginTop: '4%' },
                ]}
                onTouchStart={() => setPress(3)}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => setPress(0)}>
                <Text style={{ fontSize: 18, marginLeft: '4%', marginTop: '3%' }}>Chặn</Text>
                <Pressable style={{ justifyContent: 'center', marginTop: '2%', paddingLeft: 5, paddingRight: 5, borderRadius: 100, position: 'absolute', right: '4%', backgroundColor: '#f5f5f5' }}>
                    <FA5 name='minus-circle' size={22} color={Colors.BLACK} style={{ justifyContent: 'center', alignSelf: 'center' }}></FA5>
                </Pressable>
            </Pressable>

            <Modal
                isVisible={isModalVisible}
                backdropOpacity={0.7}
                onBackdropPress={() => setModalVisible(false)}
                style={styles.modal}>
                <View style={{ bottom: '40%',  }}>
                    <View style={{ paddingBottom: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                        <Image style={styles.cover} source={{ uri: "https://placeimg.com/800/450/any" }}></Image>
                        <Pressable
                            style={[
                                styles.closeIcon,
                                { backgroundColor: press == 4 ? Colors.GAINSBORO : '#f5f5f5', justifyContent: 'center', left: '88%' },
                            ]}
                            onTouchStart={() => setPress(4)}
                            onTouchEnd={() => setPress(0)}
                            onPressOut={() => setPress(0)}
                            onPress={() => setModalVisible(false)}>
                            <Ant name='close' size={16} color={Colors.BLACK} style={{ alignSelf: 'center' }}></Ant>
                        </Pressable>
                        <Pressable
                            onTouchStart={() => setPress(1)}
                            onTouchEnd={() => setPress(0)}
                            onPressOut={() => setPress(0)}>
                            <Image style={[styles.avatar]}
                                source={{ uri: "https://scontent-sin6-1.xx.fbcdn.net/v/t1.15752-9/130720265_169936591506039_5571318822476082269_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=B7jb8LKVm9AAX_iKd3V&_nc_ht=scontent-sin6-1.xx&oh=4fcda1e478e529511fa48c6397ff35b1&oe=5FF7AAB2" }} />
                        </Pressable>
                        <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 28, marginTop: '2%' }}>Quân Nguyễn</Text>
                        <Pressable
                            style={[
                                styles.icon,
                                { backgroundColor: press == 3 ? Colors.GAINSBORO : '#f5f5f5', justifyContent: 'center', alignSelf: 'center', marginTop: '4%' },
                            ]}
                            onTouchStart={() => setPress(3)}
                            onTouchEnd={() => setPress(0)}
                            onPressOut={() => setPress(0)}
                            onPress={() => setModalVisible(true)}>
                            <FA name='comment' size={16} color={Colors.BLACK} style={{ alignSelf: 'center' }}></FA>

                        </Pressable>
                        <Text style={{ alignSelf: 'center', marginTop: '1%' }}>Nhắn tin</Text>
                        <Pressable
                            style={[
                                styles.viewBtn,
                                { backgroundColor: press == 5 ? Colors.GAINSBORO : '#f5f5f5', justifyContent: 'center', alignSelf: 'center', marginTop: '4%' },
                            ]}
                            onTouchStart={() => setPress(5)}
                            onTouchEnd={() => setPress(0)}
                            onPressOut={() => setPress(0)}>
                            <Text style={{ alignSelf: 'center' }}>XEM TRANG CÁ NHÂN TRÊN FACEBOOK</Text>
                        </Pressable>
                    </View>
                    <View style={styles.separator}>
                        <View style={{height: 20, backgroundColor: Colors.WHITE, borderBottomLeftRadius:20, borderBottomRightRadius:20}}></View>
                        <View style={{height: 20, backgroundColor: Colors.WHITE, borderTopLeftRadius:20, borderTopRightRadius:20, marginTop: 10}}></View>
                    </View>
                    <View>
                        <Text style={{color: Colors.GRAY, marginLeft: 20, marginBottom: 20}}>Điểm chung</Text>
                        <View style={{flexDirection: 'row',}}>
                            <Ion name='person' color={'#818181'} size={26} style={{marginLeft: 20}}></Ion>
                            <Text style={{marginLeft: 20, marginTop: 2}}>60 bạn chung</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.WHITE,
    },

    viewBtn: {
        width: '95%',
        height: 35,
        justifyContent: 'center',
        borderRadius: 10,
    },

    separator: {
        backgroundColor: '#4d4d4d',
        height: 50,
    },

    cover: {
        height: 130,
        width: '100%',
        top: '25%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    modal: {
        backgroundColor: Colors.WHITE,
        height: '80%',
        margin: 0,
        position: 'absolute',
        top: '20%',
        width: '100%',
        borderRadius: 20,
        paddingTop: 15,
    },

    lineBtn: {
        width: '100%',
        height: '7%',
        flexDirection: 'row',
    },

    name: {
        marginTop: '3%',
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'center',
    },

    icon: {
        width: 30,
        height: 30,
        borderRadius: 20,
    },

    closeIcon: {
        width: 25,
        height: 25,
        borderRadius: 20,
    },

    line: {
        marginTop: '4%',
        borderTopWidth: 1,
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
        borderTopColor: '#e5e6eb',
    },

    avatar: {
        marginTop: '9%',
        alignSelf: 'center',
        width: 110,
        height: 110,
        borderRadius: 75,
        borderWidth: 4,
        borderColor: Colors.WHITE,
    }

});
