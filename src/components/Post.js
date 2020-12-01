import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import * as Colors from '../assets/Colors';
import Modal from 'react-native-modal';
import Ion from 'react-native-vector-icons/Ionicons';
import Oct from 'react-native-vector-icons/Octicons';
import Ent from 'react-native-vector-icons/Entypo';
import Ant from 'react-native-vector-icons/AntDesign';
import Sim from 'react-native-vector-icons/SimpleLineIcons';
import AsyncStorage from '@react-native-community/async-storage';

export default function Post({userInfo, time, content, medias, likes, comments ,liked}) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [press, setPress] = useState(0);
    const [noti, setNoti] = useState(true);
    const [isLike, setLike] = useState(liked);
    const [uid, setUid] = useState(0);
    const [height, setHeight]  =useState(300);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const getData = async () => {
        try {
          const uuid = await AsyncStorage.getItem('userId')
          if(uuid !== null) {
            setUid(uuid);
          }
        } catch(e) {
          // error reading value
        }
      }
    
    useEffect(() => {
        getData();
        calHeight();
    },[])

    const calHeight = async () => {
        try {
            Image.getSize("http://" + medias[0].path, (width, height) => {
                let h = Dimensions.get("window").width*height/width;
                if(h > 500) h = 500;
                setHeight(h);
            });
        } catch(e) {

        }
    }
    return (
        <View style={styles.wrap}>
            <View style={styles.headWrap}>
                <Image style={styles.avatar} source={{uri: userInfo.avatar || "https://i.stack.imgur.com/l60Hf.png"}} />
                <View style={styles.nameWrap}>
                    <Text style={styles.name}>{userInfo.name}</Text>
                    <Text style={styles.time}>{time} <Text style={styles.dot}>•</Text> <Oct name="globe" color={Colors.DARKGRAY} size={13} /></Text>
                </View>
                <Pressable style={[styles.dotButton, {backgroundColor: press == 7 ? Colors.GAINSBORO : Colors.WHITE}]}
                    onTouchStart={() => setPress(7)}
                    onTouchEnd={() => setPress(0)}
                    onPressOut={() => setPress(0)}
                    onPress={() => toggleModal()}
                >
                    <Ent name="dots-three-horizontal" size={18} color={Colors.DARKGRAY}/>
                </Pressable>
            </View>
            {content.length > 0 ?
                <Text style={[styles.content, {fontSize: medias.length > 0 ? 16 : 24}]}>{content}</Text> : null
            }
            {medias.length == 1 ?
                <Image style={{height: height}} source={{ uri: "http://" + medias[0].path}}/> : null
            }
            {medias.length == 2 ?
                <View>
                    <Image style={{height: 250, width: "100%", marginBottom: 5}} source={{ uri: "http://" + medias[0].path}}/>
                    <Image style={{height: 250, width: "100%"}} source={{ uri: "http://" + medias[1].path}}/>
                </View>: null
            }
            {medias.length == 3 ?
                <View>
                    <Image style={{height: 250, marginBottom: 5}} source={{ uri: "http://" + medias[0].path}}/>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Image style={{height: 200, width: "49.4%"}} source={{ uri: "http://" + medias[1].path}}/>
                        <Image style={{height: 200, width: "49.4%"}} source={{ uri: "http://" + medias[2].path}}/>
                    </View>
                </View>: null
            }
            {medias.length == 4 ?
                <View>
                    <Image style={{height: 250, marginBottom: 5}} source={{ uri: "http://" + medias[0].path}}/>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Image style={{height: 130, width: "32.6%"}} source={{ uri: "http://" + medias[1].path}}/>
                        <Image style={{height: 130, width: "32.6%"}} source={{ uri: "http://" + medias[2].path}}/>
                        <Image style={{height: 130, width: "32.6%"}} source={{ uri: "http://" + medias[3].path}}/> 
                    </View>
                </View>: null
            }
            <View style={styles.likeComment}>
                {likes > 0 || isLike  ?
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={styles.like} source={require('../assets/images/like.jpg')}/>
                        <Text style={styles.likeNum}>{isLike ? 'Bạn và ' + likes +' người khác' : likes}</Text>
                    </View> : null
                }
                {comments > 0 ?
                    <Text style={styles.likeNum}>{comments + " bình luận"}</Text> : null
                }
            </View>
            <View style={styles.buttonWrap}>
                <Pressable 
                    style={[styles.button, { backgroundColor: press == 4 ? Colors.WHITESMOKE : Colors.WHITE },]}
                    onTouchStart={() => setPress(4)}
                    onTouchEnd={() => setPress(0)}
                    onPressOut={() => setPress(0)}
                    onPress={() => setLike(!isLike)}
                >
                    <Ant name={isLike ? "like1" : "like2"} size={24} color={isLike ? Colors.BLUE : Colors.DARKGRAY}/>
                    <Text style={[styles.likeText, {color: isLike ? Colors.BLUE : Colors.DARKGRAY}]}>  Thích</Text>
                </Pressable>
                <Pressable 
                    style={[styles.button, { backgroundColor: press == 5 ? Colors.WHITESMOKE : Colors.WHITE },]}
                    onTouchStart={() => setPress(5)}
                    onTouchEnd={() => setPress(0)}
                    onPressOut={() => setPress(0)}
                >
                    <Ion name="chatbox-outline" size={24} style={{ alignSelf: "center", color: Colors.DARKGRAY }}/>
                    <Text style={styles.likeText}>  Bình luận</Text>
                </Pressable>
            </View>

            <Modal
                isVisible={isModalVisible}
                backdropOpacity={0.6}
                onBackdropPress={() => setModalVisible(false)}
                style={styles.modal}>
                <View style={{ padding: 0 }}>
                    {uid == userInfo.id ?
                    <View>
                    <Pressable
                        style={[styles.saveContainer, { backgroundColor: press == 1 ? Colors.GAINSBORO : Colors.WHITE }]}
                        onTouchStart={() => setPress(1)}
                        onTouchEnd={() => setPress(0)}
                        onPressOut={() => setPress(0)}
                    >
                        <Sim name="pencil" size={28} color={Colors.BLACK} style={{ marginRight: 10 }}/>
                        <Text style={{ fontSize: 16 }}>Chỉnh sửa bài viết</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.saveContainer, { backgroundColor: press == 2 ? Colors.GAINSBORO : Colors.WHITE }]}
                        onTouchStart={() => setPress(2)}
                        onTouchEnd={() => setPress(0)}
                        onPressOut={() => setPress(0)}
                    >
                        <Ion name="trash-outline" size={28} color={Colors.BLACK} style={{ marginRight: 10 }}/>
                        <Text style={{ fontSize: 16 }}>Xóa</Text>
                    </Pressable>
                    </View> : null
                    }
                    <Pressable
                        style={[styles.saveContainer, { backgroundColor: press == 3 ? Colors.GAINSBORO : Colors.WHITE }]}
                        onTouchStart={() => setPress(3)}
                        onTouchEnd={() => setPress(0)}
                        onPressOut={() => setPress(0)}
                        onPress={() => {
                            setModalVisible(false);
                            setNoti(!noti);
                        }}>
                        <Ion name="notifications-outline" size={28} color={Colors.BLACK} style={{ marginRight: 10 }}/>
                        {noti == true ? <Text style={{ fontSize: 16 }}>Tắt thông báo về bài viết này</Text> : <Text style={{ fontSize: 15 }}>Bật thông báo về bài viết này</Text>}
                    </Pressable>
                    {uid != userInfo.id ? 
                    <Pressable
                        style={[styles.saveContainer, { backgroundColor: press == 6 ? Colors.GAINSBORO : Colors.WHITE }]}
                        onTouchStart={() => setPress(6)}
                        onTouchEnd={() => setPress(0)}
                        onPressOut={() => setPress(0)}
                    >
                        <Oct name="report" size={28} color={Colors.BLACK} style={{ marginRight: 10 }}/>
                        <View>
                            <Text style={{ fontSize: 16 }}>Tìm hỗ trợ hoặc báo cáo bài viết</Text>
                            <Text style={{ fontSize: 12 }}>Tôi lo ngại về bài viết này.</Text>
                        </View>
                    </Pressable>:null
                    }   
                </View>
            </Modal>
        </View>
    )
}

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
    likeComment: {
        flexDirection: "row",
        borderBottomColor: Colors.LIGHTGRAY,
        borderBottomWidth: 0.5,
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 5,
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
        color: Colors.DARKGRAY,
        marginTop: 3,
    },
    content: {
        marginLeft: 16,
        marginTop: 5,
        marginBottom: 10,
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
        height: 60,
    },
    like: {
        width: 30,
        height: 30,
    },
    likeNum: {
        color: Colors.DARKGRAY,
        fontSize: 13,
        padding: 10,
        paddingLeft: 0,
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
        alignSelf: 'center',
        fontSize: 13,
        color: Colors.DARKGRAY,
        fontWeight: 'bold'
    },
    dotButton: {
        height: 40,
        borderRadius: 20,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 5,
    }
});
