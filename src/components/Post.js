import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Pressable, } from 'react-native';
import { color } from 'react-native-reanimated';
import * as Colors from '../assets/Colors';
import Modal from 'react-native-modal';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import FA from 'react-native-vector-icons/FontAwesome';
import Ion from 'react-native-vector-icons/Ionicons';

export default function Post({ name }) {
    let avatar = require('../assets/images/avatar.jpg');
    let privacy = require('../assets/images/public.png');
    let like = require('../assets/images/like.jpg');
    const [hasMedia, setMedia] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [press, setPress] = useState(0);
    const [noti, setNoti] = useState(true);
    const [isLike, setLike] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const styles = StyleSheet.create({
        wrap: {
            flex: 1,
            backgroundColor: Colors.WHITE,
            marginTop: 10,
        },
        headWrap: {
            padding: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        nameWrap: {
            flex: 1,
        },
        likeWrap: {
            marginTop: -4,
            padding: 6,
            flexDirection: 'row',
            flexWrap: 'wrap',
            borderBottomColor: '#f0f0f0',
            borderBottomWidth: 1,
        },
        buttonWrap: {
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        dot: {
            fontSize: 10,
        },
        btnOption: {
            flexDirection: 'row',
            alignItems: 'center',
            height: 50,
            paddingHorizontal: 15,
        },
        avatar: {
            height: 40,
            width: 40,
            marginLeft: 6,
            marginRight: 8,
            borderRadius: 50,
        },
        privacy: {
            height: 13,
            width: 13,
            borderRadius: 50,
        },
        name: {
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: -3,
        },
        time: {
            fontSize: 13,
            color: '#65666B',
            marginTop: 3,
        },
        content: {
            marginLeft: 16,
            marginTop: 5,
            marginBottom: 10,
            fontSize: hasMedia ? 24 : 16,
        },
        toggleModal: {
            marginRight: 8,
            marginTop: -26,
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
        contentImage: {
            padding: -10,
            flex: 1,
            height: 300,
            width: null,
            resizeMode: 'contain'
        },
        like: {
            width: 26,
            height: 26,
        },
        likeNum: {
            color: '#65666B',
            fontSize: 13,
            marginTop: 3,
        },
        button: {
            width: '50%',
            height: 42,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            paddingTop: 9,
        },
        likeText: {
            color: isLike ? '#1878F3' : '#65666B',
            alignSelf: 'center',
            fontSize: 13,
        },
        commentText: {
            color: '#65666B',
            alignSelf: 'center',
            fontSize: 13,
        }
    });

    return (
        <View style={styles.wrap}>
            <View style={styles.headWrap}>
                <Image style={styles.avatar} source={avatar} />
                <View style={styles.nameWrap}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.time}>Vừa xong <Text style={styles.dot}>•</Text> <Image style={styles.privacy} source={privacy} /></Text>
                </View>
                <TouchableOpacity style={styles.toggleModal} onPress={() => toggleModal()} activeOpacity={0.8}>
                    <Text style={{ color: '#646464', fontSize: 30 }}>…</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.content}>
                Lovely!
            </Text>
            <Image style={styles.contentImage} source={{ uri: 'https://scontent.fhan5-5.fna.fbcdn.net/v/t1.15752-9/123732542_3320030068115744_2655526202932997592_n.jpg?_nc_cat=101&ccb=2&_nc_sid=ae9488&_nc_ohc=3fDHLX2qYIQAX-briof&_nc_ht=scontent.fhan5-5.fna&oh=266652730b672708deea4d577af4f0b4&oe=5FE9B615' }}></Image>
            <View style={styles.likeWrap}>
                <Image style={styles.like} source={like}></Image>
                <Text style={styles.likeNum}>
                    {isLike ? 'Bạn và 33 người khác' : '33'}
                </Text>
            </View>
            <View style={styles.buttonWrap}>
                <Pressable style={[styles.button, { backgroundColor: press == 4 ? Colors.GAINSBORO : Colors.WHITE },]}
                onTouchStart={() => {
                    setPress(4);
                }}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => {
                    setPress(0);
                }}
                onPress={() => {
                    setLike(!isLike)
                }}>
                    { isLike ? <FA name="thumbs-up"
                        size={22}
                        style={{ alignSelf: "center", color: "#1878F3" }}/>
                        : <FA name="thumbs-o-up"
                        size={22}
                        style={{ alignSelf: "center", color: '#65666B' }}/>
                    }
                    <Text style={styles.likeText}>  Thích</Text>
                </Pressable>
                <Pressable style={[styles.button, { backgroundColor: press == 5 ? Colors.GAINSBORO : Colors.WHITE },]}
                onTouchStart={() => {
                    setPress(5);
                }}
                onTouchEnd={() => setPress(0)}
                onPressOut={() => {
                    setPress(0);
                }}
                onPress={() => {
                   
                }}>
                    <FA5 name="comment-alt"
                        size={22}
                        style={{ alignSelf: "center", color: '#65666B' }}/>
                    <Text style={styles.commentText}>  Bình luận</Text>
                </Pressable>
            </View>

            <Modal
                isVisible={isModalVisible}
                backdropOpacity={0.35}
                onBackdropPress={() => setModalVisible(false)}
                style={styles.modal}>
                <View style={{ padding: 0 }}>
                    <Pressable
                        style={[
                            styles.saveContainer,
                            { backgroundColor: press == 1 ? Colors.GAINSBORO : Colors.WHITE },
                        ]}
                        onTouchStart={() => {
                            setPress(1);
                        }}
                        onTouchEnd={() => setPress(0)}
                        onPressOut={() => {
                            setPress(0);
                        }}>
                        <FA5
                            name="pen"
                            size={22}
                            color={Colors.DARKGRAY}
                            style={{ marginRight: 10 }}
                        />
                        <View>
                            <Text style={{ fontSize: 15 }}>Chỉnh sửa bài viết</Text>
                        </View>
                    </Pressable>
                    <Pressable
                        style={[
                            styles.saveContainer,
                            { backgroundColor: press == 2 ? Colors.GAINSBORO : Colors.WHITE },
                        ]}
                        onTouchStart={() => {
                            setPress(2);
                        }}
                        onTouchEnd={() => setPress(0)}
                        onPressOut={() => {
                            setPress(0);
                        }}>
                        <Ion
                            name="trash-outline"
                            size={28}
                            color={Colors.DARKGRAY}
                            style={{ marginRight: 10 }}
                        />
                        <View>
                            <Text style={{ fontSize: 15 }}>Xóa</Text>
                        </View>
                    </Pressable>
                    <Pressable
                        style={[
                            styles.saveContainer,
                            { backgroundColor: press == 3 ? Colors.GAINSBORO : Colors.WHITE },
                        ]}
                        onTouchStart={() => {
                            setPress(3);
                        }}
                        onTouchEnd={() => setPress(0)}
                        onPressOut={() => {
                            setPress(0);
                        }}
                        onPress={() => {
                            setModalVisible(false);
                            setNoti(!noti);
                        }}>
                        <Ion
                            name="notifications-outline"
                            size={28}
                            color={Colors.DARKGRAY}
                            style={{ marginRight: 10 }}
                        />
                        <View>
                            {noti == true ? <Text style={{ fontSize: 15 }}>Tắt thông báo về bài viết này</Text> : <Text style={{ fontSize: 15 }}>Bật thông báo về bài viết này</Text>}
                        </View>
                    </Pressable>
                </View>
            </Modal>
        </View>
    )
}


