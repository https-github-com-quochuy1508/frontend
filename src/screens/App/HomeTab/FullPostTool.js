import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, TextInput, Pressable, Keyboard} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import Oct from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ion from 'react-native-vector-icons/Ionicons';
import * as Colors from '../../../assets/Colors'
import Modal from 'react-native-modal';

export default function FullPostTool({navigation}) {
    const [press, setPress] = useState(0);
    const [show, setShow] = useState(true);
    const [content, setContent] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.WHITE,
        },
        header: {
            flexDirection: 'row',
            width: "100%",
            height: 50,
            padding: 10,
            borderBottomColor: Colors.LIGHTGRAY,
            borderBottomWidth: 0.5,
            alignItems: 'center'
        },
        title: {
            fontSize: 17,
            marginLeft: 5,
        },
        postContainer: {
            position: "absolute",
            right: 5,
            backgroundColor: press == 4 ? Colors.LIGHTGRAY : Colors.WHITE,
            height: 46,
            width: 60,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center'
        },
        postText: {
            color: content.length > 0 ? Colors.BLUE : Colors.GAINSBORO
        },
        headContainer: {
            flexDirection: "row",
            marginHorizontal: 15,
            marginTop: 15,
        },
        avt: {
            width: 50,
            height: 50,
            borderRadius: 25,
        },
        name: {
            fontWeight: "bold",
            fontSize: 16,
        },
        headTitleContainer: {
            marginLeft: 10,
        },
        public: {
            flexDirection: 'row',
            width: 100,
            height: 30,
            borderRadius: 5,
            borderColor: Colors.LIGHTGRAY,
            borderWidth: 0.5,
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingHorizontal: 5
        },
        publicText: {
            fontWeight: 'bold',
            color: Colors.GRAY,
            fontSize: 12,
        },
        input: {
            fontSize: 25,
            margin: 15,
        },
        addContainer: {
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 43,
            borderTopWidth: 0.5,
            borderTopColor: Colors.LIGHTGRAY,
            alignItems: 'center',
            padding: 10,
        },
        iconGroup: {
            flexDirection: 'row',
            position: 'absolute',
            right: 10,
        },
        backIcon: {
            backgroundColor: press == 1 ? Colors.LIGHTGRAY : Colors.WHITE,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
        },
        line: {
            flexDirection: 'row',
            width: '100%',
            height: 50,
            borderTopColor: Colors.LIGHTGRAY,
            borderTopWidth: 0.5,
            alignItems: 'center',
            padding: 15,
        },
        modal: {
            margin: 0, 
            position: "absolute", 
            bottom: 0,
            width: "100%",
            backgroundColor: Colors.WHITE, 
        },
        saveContainer: {
            flexDirection: 'row',
            paddingLeft: 10,
            alignItems: 'center',
            height: 70

        }
    })

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);    
        // cleanup function
        return () => {
          Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
        };
      }, []);
    
      const _keyboardDidShow = () => {
        setShow(false);
      };

    const onGoBack = () => {
        if(show) {
            setShow(false);
        }
        else if(content.length > 0) {
            Keyboard.dismiss();
            setModalVisible(true);
        }
        else {
            navigation.goBack();
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.backIcon} 
                    onPress={() => onGoBack()}
                    onTouchStart={() => setPress(1)}
                    onTouchEnd={() => setPress(0)}
                >
                    <Ant name="arrowleft" size={24} />
                </Pressable>
                <Text style={styles.title}>Tạo bài viết</Text>
                <Pressable 
                    disabled={content.length == 0}
                    style={styles.postContainer}
                    onTouchStart={() => {if(content.length > 0) setPress(4)}}
                    onTouchEnd={() => setPress(0)}
                >
                    <Text style={styles.postText}>ĐĂNG</Text>
                </Pressable>
            </View>
            <View style={styles.headContainer}>
                <Image source={{uri: "https://scontent.fhan9-1.fna.fbcdn.net/v/t1.0-9/109937103_1147876648925466_5407335593471103700_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=uKzWS_yxgZAAX9-JzFG&_nc_ht=scontent.fhan9-1.fna&oh=91377309008559c505359fd91e291b66&oe=5FCB1B0D"}} style={styles.avt}/>
                <View style={styles.headTitleContainer}>
                    <Text style={styles.name}>Phạm Đình Thắng</Text>
                    <View style={styles.public}>
                        <Oct name="globe" color={Colors.GRAY} size={16}/>
                        <Text style={styles.publicText}>Công khai</Text>
                    </View>
                </View>
            </View>
            <TextInput
                placeholder="Bạn đang nghĩ gì?"
                placeholderTextColor={Colors.GRAY}
                style={styles.input}
                onChangeText={(text) => setContent(text.trim())}
                multiline={true}
            />
            {show ? 
            <View style={{position: "absolute", bottom: 0, width: '100%'}}>
                <Pressable 
                    style={[styles.line, {backgroundColor: press == 2 ? Colors.GAINSBORO : Colors.WHITE}]} 
                    onTouchStart={() => setPress(2)} 
                    onTouchEnd={() => setPress(0)} 
                    onPressOut={() => setPress(0)}
                >
                    <Fontisto style={{marginRight: 15}} name="photograph" color={Colors.LIME} size={24}/>
                    <Text style={{fontSize: 16}}>Ảnh/Video</Text>
                </Pressable>
                <Pressable 
                    style={[styles.line, {backgroundColor: press == 3 ? Colors.GAINSBORO : Colors.WHITE}]} 
                    onTouchStart={() => setPress(3)} 
                    onTouchEnd={() => setPress(0)} 
                    onPressOut={() => setPress(0)}
                >
                    <Fontisto style={{marginRight: 15}} name="smiley" size={24} color={Colors.ORANGE}/>
                    <Text style={{fontSize: 16}}>Cảm xúc/Hoạt động</Text>
                </Pressable>
            </View>
            :
            <Pressable style={styles.addContainer} onPress={() => {setShow(true); Keyboard.dismiss()}}>
                <Text style={{fontSize: 16}}>Thêm vào bài viết của bạn</Text>
                <View style={styles.iconGroup}>
                    <Fontisto style={{marginRight: 5}} name="photograph" color={Colors.LIME} size={24}/>
                    <Fontisto name="smiley" size={24} color={Colors.ORANGE}/>
                </View>
            </Pressable> 
            }
            <Modal 
                isVisible={isModalVisible}
                backdropOpacity={0.35}
                onBackdropPress={() => setModalVisible(false)}
                style={styles.modal}
            >
                <View style={{padding: 10}}>
                    <Text style={{fontSize: 15, marginBottom: 5}}>Bạn muốn hoàn thành bài viết của mình sau?</Text>
                    <Text style={{color: Colors.DARKGRAY, fontSize: 13.5}}>Lưu làm bản nháp hoặc bạn có thể tiếp tục chỉnh sửa.</Text>
                </View>
                <Pressable 
                    style={[styles.saveContainer, {backgroundColor: press == 5 ? Colors.GAINSBORO : Colors.WHITE}]}
                    onTouchStart={() => {setPress(5)}}
                    onTouchEnd={() => setPress(0)} 
                    onPressOut={() => {setPress(0)}}
                >
                    <Ion name="bookmark-outline" size={28} color={Colors.DARKGRAY} style={{marginRight: 10}}/>
                    <View>
                        <Text style={{fontSize: 15}}>Lưu làm bản nháp</Text>
                        <Text style={{color: Colors.DARKGRAY, fontSize: 12}}>Bạn sẽ nhận được thông báo về bản nháp.</Text>
                    </View>
                </Pressable>
                <Pressable 
                    style={[styles.saveContainer, {backgroundColor: press == 6 ? Colors.GAINSBORO : Colors.WHITE}]}
                    onTouchStart={() => {setPress(6)}}
                    onTouchEnd={() => setPress(0)} 
                    onPressOut={() => {setPress(0)}}
                    onPress={() => {setModalVisible(false);navigation.goBack()}}
                >
                    <Ion name="trash-outline" size={28} color={Colors.DARKGRAY} style={{marginRight: 10}}/>
                    <Text style={{fontSize: 15}}>Bỏ bài viết</Text>
                </Pressable>
                <Pressable 
                    style={[styles.saveContainer, {backgroundColor: press == 7 ? Colors.GAINSBORO : Colors.WHITE}]}
                    onTouchStart={() => {setPress(7)}}
                    onTouchEnd={() => setPress(0)} 
                    onPressOut={() => {setPress(0)}}
                    onPress={() => setModalVisible(false)}
                >
                    <Ion name="checkmark" size={28} color={Colors.BLUE} style={{marginRight: 10}}/>
                    <Text style={{fontSize: 15, color: Colors.BLUE}}>Tiếp tục chỉnh sửa</Text>
                </Pressable>
            </Modal>
        </View>
    )
}