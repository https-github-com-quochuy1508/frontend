import React, {useState} from 'react';
import {TouchableHighlight, Text, View, Image, StyleSheet, Pressable} from 'react-native'
import * as Colors from '../../../assets/Colors';
import Ent from 'react-native-vector-icons/Entypo';
import Font from 'react-native-vector-icons/Fontisto';
import Ion from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

export default function FriendSuggest() {
    const [showModal, setShowModal] = useState(false);
    const [showBlock, setShowBlock] = useState(false);
    const [showUnfriend, setShowUnfriend] = useState(false);
    return (
        <View>
            <TouchableHighlight
                underlayColor={Colors.GRAY91}
                onPress={() => {}}
            >
                <View style={{flexDirection: 'row', paddingVertical: 8, alignItems: 'center'}}>
                    <Image source={{uri: 'https://scontent.fhan7-1.fna.fbcdn.net/v/t1.0-9/88156367_918464705252110_7654917145054150656_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=QEbZLWudpYcAX96k52q&_nc_ht=scontent.fhan7-1.fna&oh=106fa940f199f46440821e4b97ad9cae&oe=5FF8EB2B'}}
                        style={styles.image}
                    />
                    <View style={{justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 17}}>Nguyễn Hồng Phương</Text>
                        <Text style={{color: Colors.DARKGRAY, fontSize: 15}}>10 bạn chung</Text>
                    </View>
                    <TouchableHighlight 
                        style={styles.dotButton}
                        underlayColor={Colors.GAINSBORO}
                        onPress={() => setShowModal(true)}
                    >
                        <Ent name="dots-three-horizontal" size={18} color={Colors.DARKGRAY}/>
                    </TouchableHighlight>
                </View>
            </TouchableHighlight>
            <Modal
                style={{margin: 0}}
                isVisible={showModal}
                onBackButtonPress={() => setShowModal(false)}
                onSwipeComplete={() => setShowModal(false)}
                onBackdropPress={() => setShowModal(false)}
                swipeDirection="down"
                backdropOpacity={0.2}
            >
                <View style={styles.modalContent}>
                    <View style={styles.info}>
                        <Image source={{uri: 'https://scontent.fhan7-1.fna.fbcdn.net/v/t1.0-9/88156367_918464705252110_7654917145054150656_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=QEbZLWudpYcAX96k52q&_nc_ht=scontent.fhan7-1.fna&oh=106fa940f199f46440821e4b97ad9cae&oe=5FF8EB2B'}}
                            style={styles.imageDetail}
                        />
                        <View>
                            <Text style={{fontWeight: 'bold', fontSize: 20}}>Nguyễn Hồng Phương</Text>
                            <Text style={{color: Colors.DARKGRAY, fontSize: 15}}>Là bạn bè từ tháng 11 năm 2019</Text>
                        </View>
                    </View>
                    <Pressable style={styles.action}>
                        <Font name="messenger" size={24} style={{marginRight: 10}}/>
                        <Text style={styles.actionText}>Nhắn tin cho Nguyễn</Text>
                    </Pressable>
                    <Pressable style={styles.action} onPress={() => {setShowModal(false); setShowBlock(true)}}>
                        <Ent name="block" size={24} style={{marginRight: 10}}/>
                        <View>
                            <Text style={styles.actionText}>Chặn Nguyễn</Text>
                            <Text style={styles.detailText}>Nguyễn sẽ không thể nhìn thấy bạn hoặc liên hệ với bạn trên Fakebook.</Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.action} onPress={() => {setShowModal(false); setShowUnfriend(true)}}>
                        <Ion name="person-remove-outline" size={24} style={{marginRight: 10}} color={Colors.REDPINK}/>
                        <View>
                            <Text style={[styles.actionText, {color: Colors.REDPINK}]}>Hủy kết bạn với Nguyễn</Text>
                            <Text style={styles.detailText}>Xóa nguyễn khỏi danh sách bạn bè.</Text>
                        </View>
                    </Pressable>
                </View>
            </Modal>
            <Modal
                style={{alignItems: 'center'}}
                isVisible={showBlock}
                onBackButtonPress={() => setShowBlock(false)}
                onBackdropPress={() => setShowBlock(false)}
                backdropOpacity={0.5}
                animationIn="zoomIn"
                animationOut="zoomOut"
            >
                <View style={styles.deleteContainer}>
                    <Text style={{fontSize: 16, marginBottom: 20, fontWeight: 'bold'}}>Chặn Nguyễn Hồng Phương</Text>
                    <Text style={{color: Colors.BLACK}}>Những người bạn chặn sẽ không thể gắn thẻ hay mời bạn tham gia nhóm hoặc sự kiện, cũng không thể bắt đầu trò chuyện, thêm bạn vào danh sách bạn bè hoặc xem nội dung của bạn đăng trên dòng thời gian của mình nữa. Nếu bạn đang chặn ai đó khi hai người đang là bạn bè thì hành động này cũng sẽ hủy kết bạn với họ.</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10}}>
                        <TouchableHighlight 
                            style={styles.deleteAction} 
                            underlayColor={Colors.GRAY91}
                            onPress={() => setShowBlock(false)}>
                            <Text style={{color: Colors.BLUE}}>HỦY</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            style={styles.deleteAction} 
                            underlayColor={Colors.GRAY91}
                            onPress={() => setShowBlock(false)}>
                            <Text style={{color: Colors.BLUE}}>CHẶN</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            <Modal
                style={{alignItems: 'center'}}
                isVisible={showUnfriend}
                onBackButtonPress={() => setShowUnfriend(false)}
                onBackdropPress={() => setShowUnfriend(false)}
                backdropOpacity={0.5}
                animationIn="zoomIn"
                animationOut="zoomOut"
            >
                <View style={styles.deleteContainer}>
                    <Text style={{fontSize: 16, marginBottom: 20, fontWeight: 'bold'}}>Hủy kết bạn với Nguyễn Hồng Phương</Text>
                    <Text style={{color: Colors.BLACK}}>Bạn có chắc chắn muốn xóa Nguyễn khỏi danh sách bạn bè không?.</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10}}>
                        <TouchableHighlight 
                            style={styles.deleteAction} 
                            underlayColor={Colors.GRAY91}
                            onPress={() => setShowUnfriend(false)}>
                            <Text style={{color: Colors.BLUE}}>HỦY</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            style={styles.deleteAction} 
                            underlayColor={Colors.GRAY91}
                            onPress={() => setShowUnfriend(false)}>
                            <Text style={{color: Colors.BLUE}}>XÁC NHẬN</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    detailText: {
        color: Colors.DARKGRAY, 
    },
    action: {
        flexDirection: 'row', 
        padding: 10, 
        alignItems: 'center',
        width: "95%"
    },
    actionText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    info: {
        flexDirection: 'row', 
        padding: 10, 
        borderBottomColor: Colors.GAINSBORO, 
        borderBottomWidth: 0.5,
        marginBottom: 10,
    },
    modalContent: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: Colors.WHITE,
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    imageDetail: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    image: {
        width: 65, 
        height: 65, 
        borderRadius: 50,
        marginLeft: 15,
        marginRight: 10,
    },
    actionButton: {
        width: 120,
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        marginTop: 15,
    },
    dotButton: {
        height: 40,
        borderRadius: 20,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 5,
    },
    deleteAction: {
        padding: 10, 
        height: 50, 
        justifyContent: "center", 
        borderRadius: 3,
    },
    deleteContainer: {
        padding: 20,
        backgroundColor: Colors.WHITE,
        width: "95%",
        borderRadius: 3,
        paddingBottom: 10,
        paddingRight: 10,
    },
})