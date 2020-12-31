import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions, TouchableHighlight, Pressable, Image } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Font from 'react-native-vector-icons/Fontisto';
import Ent from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import {logOut} from '../../../redux/actions/loginAction';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Colors from '../../../assets/Colors';
import Modal from 'react-native-modal';

function NotificationItem({type, isRead}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <TouchableOpacity
        // onPress={}
        // onLongPress={}
        style={{ ...styles.container, backgroundColor: isRead ? Colors.WHITE : '#edf2fa' }}>

        <ImageBackground imageStyle={{ borderRadius: 64 }} style={styles.avatar} source={{ uri: "https://ngaocontent.com/wp-content/uploads/2020/09/hinh1.jpg" }}>
            {type == 1 ?
            <View style={{ ...styles.notificationIcon, backgroundColor: Colors.BLUE }}>
                <Icon name="like1" size={14} color="#fff" />
            </View> :
            <View style={{ ...styles.notificationIcon, backgroundColor: "#63BE09" }}>
                <FontAwesome5Icon name="comment-alt" size={14} color="#fff" />
            </View>
            }
        </ImageBackground>

        <View style={styles.contentWrapper}>
            <Text style={styles.pureTxt}>
                <Text style={styles.hightlightTxt}>Đức</Text> đã {type == 1 ? "thích" : "bình luận"} bài viết của bạn</Text>
            <Text style={{ color: '#333' }}>Vừa xong</Text>
        </View>

        <TouchableHighlight
            onPress={() => setShowModal(true)}
            underlayColor={Colors.GRAY91}
            style={{width: 30, height: 30, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}
        >
            <FontAwesome5Icon name="ellipsis-h" size={13} />
        </TouchableHighlight>
        <Modal
            style={{margin: 0}}
            isVisible={showModal}
            onBackButtonPress={() => setShowModal(false)}
            onSwipeComplete={() => setShowModal(false)}
            onBackdropPress={() => setShowModal(false)}
            swipeDirection="down"
            backdropOpacity={0.4}
        >
            <View style={styles.modalContent}>
                <Image 
                    source={{uri: "https://ngaocontent.com/wp-content/uploads/2020/09/hinh1.jpg"}} 
                    style={styles.detailAvt}
                />
                <Text style={styles.detailText}>Đức đã {type == 1 ? "thích" : "bình luận"} bài viết của bạn</Text>
                <TouchableHighlight 
                    onPress={() => setShowModal(false)}
                    underlayColor={Colors.GRAY91}
                >
                    <View style={styles.action}>
                        <Ent name="circle-with-cross" size={30} style={styles.removeIcon} />
                        <Text style={styles.actionText}>Gỡ thông báo này</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </Modal>
    </TouchableOpacity>
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
        paddingHorizontal: 15,
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
    detailText: {
        color: Colors.DARKGRAY,
        alignSelf: 'center'
      },
      action: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        width: '95%',
      },
      actionText: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      modalContent: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: Colors.WHITE,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'center'
      },
    detailAvt: {
        width: 50, 
        height: 50, 
        borderRadius: 30, 
        alignSelf: 'center', 
        marginTop: 10
    },
    removeIcon: {
        marginHorizontal: 10, 
        backgroundColor: Colors.GAINSBORO, 
        padding: 5, 
        borderRadius: 30
    }
})