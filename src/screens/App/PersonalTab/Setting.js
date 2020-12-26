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

export default function Setting({ navigation }) {
    const [press, setPress] = useState(0);
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button,
            { backgroundColor: press == 1 ? Colors.SILVER97 : Colors.WHITE }
            ]}
                onTouchStart={() => setPress(1)}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => setPress(0)}
                onPress={() => navigation.navigate('Edit')}>
                <Sim name='pencil' size={22} style={{ alignSelf: 'center' }} />
                <Text style={{ fontSize: 16, alignSelf: 'center', marginLeft: '5%' }}>Chỉnh sửa trang cá nhân</Text>
            </Pressable>

            <Pressable style={[styles.button,
            { backgroundColor: press == 2 ? Colors.SILVER97 : Colors.WHITE }
            ]}
                onTouchStart={() => setPress(2)}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => setPress(0)}>
                <Mat name='progress-clock' size={22} style={{ alignSelf: 'center' }} />
                <Text style={{ fontSize: 16, alignSelf: 'center', marginLeft: '5%' }}>Kho lưu trữ tin</Text>
            </Pressable>

            <Pressable style={[styles.button,
            { backgroundColor: press == 3 ? Colors.SILVER97 : Colors.WHITE },
            {marginBottom: 10,}
            ]}
                onTouchStart={() => setPress(3)}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => setPress(0)}>
                <Ion name='bookmark-outline' size={22} style={{ alignSelf: 'center' }} />
                <Text style={{ fontSize: 16, alignSelf: 'center', marginLeft: '5%' }}>Mục đã lưu</Text>
            </Pressable>

            <Pressable style={[styles.button,
            { backgroundColor: press == 4 ? Colors.SILVER97 : Colors.WHITE }
            ]}
                onTouchStart={() => setPress(4)}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => setPress(0)}>
                <FA5 name='eye' size={22} style={{ alignSelf: 'center' }} />
                <Text style={{ fontSize: 16, alignSelf: 'center', marginLeft: '5%' }}>Chế độ xem</Text>
            </Pressable>
            
            <Pressable style={[styles.button,
            { backgroundColor: press == 5 ? Colors.SILVER97 : Colors.WHITE }
            ]}
                onTouchStart={() => setPress(5)}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => setPress(0)}>
                <FA5 name='tasks' size={22} style={{ alignSelf: 'center' }} />
                <Text style={{ fontSize: 16, alignSelf: 'center', marginLeft: '5%' }}>Nhật ký hoạt động</Text>
            </Pressable>
            
            <Pressable style={[styles.button,
            { backgroundColor: press == 6 ? Colors.SILVER97 : Colors.WHITE }
            ]}
                onTouchStart={() => setPress(6)}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => setPress(0)}>
                <Fea name='lock' size={22} style={{ alignSelf: 'center' }} />
                <Text style={{ fontSize: 16, alignSelf: 'center', marginLeft: '5%' }}>Xem lối tắt quyền riêng tư</Text>
            </Pressable>
            <Pressable style={[styles.button,
            { backgroundColor: press == 7 ? Colors.SILVER97 : Colors.WHITE },
            {marginBottom: 10},]}
                onTouchStart={() => setPress(7)}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => setPress(0)}>
                <Fon name='search' size={22} style={{ alignSelf: 'center' }} />
                <Text style={{ fontSize: 16, alignSelf: 'center', marginLeft: '5%' }}>Tìm kiếm trên trang cá nhân</Text>
            </Pressable>

            <View style={styles.linkWrap}>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 12}}>Liên kết đến trang cá nhân của bạn</Text>
                <Text style={{marginTop: 5, paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: Colors.GRAY91}}>Liên kết của riêng bạn trên Facebook.</Text>
                <Text style={{fontWeight: 'bold'}}>https://www.facebook.com/bluesky18.ask.us</Text>
                <Pressable style={[styles.copyBtn,
                { backgroundColor: press == 8 ? Colors.SILVER97 : Colors.WHITE }
            ]}
                onTouchStart={() => setPress(8)}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => setPress(0)}>
                    <Text style={{alignSelf: 'center',fontSize: 15, color: Colors.DARKGRAY}}>SAO CHÉP LIÊN KẾT</Text>
                </Pressable>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 10,
        borderTopColor: Colors.SILVER95,
        height: '100%',
        backgroundColor: Colors.SILVER95,
    },

    button: {
        backgroundColor: Colors.WHITE,
        width: '100%',
        height: 50,
        paddingLeft: '4%',
        flexDirection: 'row',
        marginBottom: 1,
    },
     
    linkWrap: {
        backgroundColor: Colors.WHITE,
        width: '100%',
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingBottom: '4%'
    },

    copyBtn: {
        marginTop: 5,
        borderWidth: 1,
        width: 180,
        height: 30,
        justifyContent: 'center',
        borderColor: Colors.DARKGRAY,
        borderRadius: 5,
    }
});
