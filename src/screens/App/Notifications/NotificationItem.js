import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity, Dimensions, Modal, Pressable } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Ion from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { logOut } from '../../../redux/actions/loginAction';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Octicons';
import Button from '../../../components/MenuButton';
import * as Colors from '../../../assets/Colors';

function NotificationItem() {

    const [press, setPress] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    }

    return (
        <View style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
            <TouchableOpacity
                // onPress={}
                // onLongPress={}
                style={{ ...styles.container, backgroundColor: '#edf2fa' }}>

                <ImageBackground imageStyle={{ borderRadius: 64 }} style={styles.avatar} source={{ uri: "https://ngaocontent.com/wp-content/uploads/2020/09/hinh1.jpg" }}>
                    <View style={{ ...styles.notificationIcon, backgroundColor: "#63BE09" }}>
                        <FontAwesome5Icon name="comment-alt" size={14} color="#fff" />
                    </View>
                </ImageBackground>

                <View style={styles.contentWrapper}>
                    <Text style={styles.pureTxt}>
                        <Text style={styles.hightlightTxt}>Duc</Text> and 999999999999999999999999 another people react your comment.</Text>
                    <Text style={{ color: '#333' }}>Vừa xong</Text>
                </View>

                <TouchableOpacity
                    onPress={() => showModal()}
                >
                    <FontAwesome5Icon name="ellipsis-h" />
                </TouchableOpacity>
            </TouchableOpacity>

            <Modal
                visible={isModalVisible}
                backdropOpacity={0.35}
                onBackdropPress={() => setModalVisible(false)}
                style={styles.modal}>

                {/* <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 15, marginBottom: 5 }}>
                        Bạn muốn hoàn thành bài viết của mình sau?
                    </Text>
                            <Text style={{ color: Colors.DARKGRAY, fontSize: 13.5 }}>
                                Lưu làm bản nháp hoặc bạn có thể tiếp tục chỉnh sửa.
                    </Text>
                </View> */}
                
                <Pressable
                    style={[
                        styles.saveContainer,
                        { backgroundColor: press == 6 ? Colors.GAINSBORO : Colors.WHITE },
                    ]}
                    onTouchStart={() => setPress(6)}
                    onTouchEnd={() => setPress(0)}
                    onPressOut={() => setPress(0)}
                    onPress={() => {
                        setModalVisible(false);
                        // navigation.goBack();
                    }}>
                    <Ion
                        name="trash-outline"
                        size={30}
                        color={Colors.DARKGRAY}
                        style={{ marginLeft: 10, marginRight: 10, backgroundColor: "#a6a6a6", borderRadius: 14 }}
                    />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Gỡ thông báo này</Text>
                </Pressable>
                
            </Modal>
        </View>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logOut());
        },
    };
};

const NotificationItemContainer = connect(null, mapDispatchToProps)(NotificationItem);

export default NotificationItemContainer;

const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    avatar: {
        height: 64,
        width: 64,
        position: 'relative',
        borderRadius: 64,
        borderColor: "#ddd",
        borderWidth: 0.5,
    },
    contentWrapper: {
        width: SCREEN_WIDTH - 40 - 30 - 48,
        paddingHorizontal: 10
    },
    mainContent: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    btnOptions: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignContent: 'center'
    },
    pureTxt: {
        fontSize: 16,
    },
    hightlightTxt: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    notificationIcon: {
        position: 'absolute',
        bottom: -5,
        right: -5,
        height: 25,
        width: 25,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        margin: 0,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: Colors.WHITE,
    },
    saveContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center',
        height: 70,
    },
})