import React, {useState} from 'react';
import {TouchableHighlight, Text, View, Image, StyleSheet} from 'react-native'
import * as Colors from '../../../assets/Colors';
import Modal from 'react-native-modal';
import {navigation} from '../../../../rootNavigation';
export default function FriendSuggest() {
    const [showAcceptConfirm, setShowAcceptConfirm] = useState(false);
    const [showDeclineConfirm, setShowDeclineConfirm] = useState(false);
    const [decision, setDecision] = useState(0);
    return (
        <View>
            <TouchableHighlight
                underlayColor={Colors.GRAY91}
                onPress={() => navigation.navigate("OtherWall")}
            >
                <View style={{flexDirection: 'row', paddingVertical: 10}}>
                    <Image source={{uri: 'https://scontent.fhan7-1.fna.fbcdn.net/v/t1.0-9/88156367_918464705252110_7654917145054150656_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=QEbZLWudpYcAX96k52q&_nc_ht=scontent.fhan7-1.fna&oh=106fa940f199f46440821e4b97ad9cae&oe=5FF8EB2B'}}
                        style={styles.image}
                    />
                    <View style={{justifyContent: 'center'}}>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 17}}>
                                Phạm Đình Lực
                            </Text>
                            <Text style={{color: Colors.DARKGRAY, fontSize: 15}}>
                                {decision == 0 ? "10 bạn chung" : (decision == 1 ? "Đã gửi yêu cầu" : "Đã hủy yêu cầu")}
                            </Text>
                        </View>
                        {decision == 1 ?
                        <TouchableHighlight 
                            style={[styles.actionButton, {backgroundColor: Colors.GAINSBORO, width: 250}]}
                            underlayColor={Colors.GAINSBORO}
                            onPress={() => setDecision(-1)}>
                            <Text style={{fontWeight: "bold", color: Colors.BLACK}}>Hủy</Text>
                        </TouchableHighlight> :
                        <View style={{flexDirection: 'row'}}>
                            <TouchableHighlight 
                                style={[styles.actionButton, {backgroundColor: Colors.BLUE}]}
                                onPress={() => setShowAcceptConfirm(true)}
                                underlayColor="#185df3"
                            >
                                <Text style={{fontWeight: "bold", color: Colors.WHITE}}>Thêm bạn bè</Text>
                            </TouchableHighlight>
                            <TouchableHighlight 
                                style={[styles.actionButton, {backgroundColor: Colors.GAINSBORO}]}
                                underlayColor={Colors.GAINSBORO}
                                onPress={() => setShowDeclineConfirm(true)}>
                                <Text style={{fontWeight: "bold", color: Colors.BLACK}}>Gỡ</Text>
                            </TouchableHighlight>
                        </View>
                        }
                    </View>
                </View>
            </TouchableHighlight>
            <Modal
                style={{alignItems: 'center'}}
                isVisible={showAcceptConfirm}
                onBackButtonPress={() => setShowAcceptConfirm(false)}
                onBackdropPress={() => setShowAcceptConfirm(false)}
                backdropOpacity={0.6}
                animationIn="zoomIn"
                animationOut="zoomOut"
            >
                <View style={styles.deleteContainer}>
                    <Text style={{fontSize: 18, marginBottom: 20}}>
                        Gửi lời mời kết bạn?
                    </Text>
                    <Text style={{fontSize: 15, color: Colors.DARKGRAY}}>
                        Bạn chắc chắn muốn gửi lời mời kết bạn đến người ngày.
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            marginTop: 10,
                            }}>
                        <TouchableHighlight
                            style={styles.deleteAction}
                            underlayColor={Colors.GRAY91}
                            onPress={() => {setShowAcceptConfirm(false); setDecision(1)}}>
                            <Text style={{color: Colors.BLUE}}>ĐỒNG Ý</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.deleteAction}
                            underlayColor={Colors.GRAY91}
                            onPress={() => setShowAcceptConfirm(false)}>
                            <Text>HỦY</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            <Modal
                style={{alignItems: 'center'}}
                isVisible={showDeclineConfirm}
                onBackButtonPress={() => setShowDeclineConfirm(false)}
                onBackdropPress={() => setShowDeclineConfirm(false)}
                backdropOpacity={0.6}
                animationIn="zoomIn"
                animationOut="zoomOut"
            >
                <View style={styles.deleteContainer}>
                    <Text style={{fontSize: 18, marginBottom: 20}}>
                        Xóa gợi ý kết bạn?
                    </Text>
                    <Text style={{fontSize: 15, color: Colors.DARKGRAY}}>
                        Bạn muốn xóa gợi ý kết bạn này.
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            marginTop: 10,
                            }}>
                        <TouchableHighlight
                            style={styles.deleteAction}
                            underlayColor={Colors.GRAY91}
                            onPress={() => setShowDeclineConfirm(false)}>
                            <Text style={{color: Colors.BLUE}}>ĐỒNG Ý</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.deleteAction}
                            underlayColor={Colors.GRAY91}
                            onPress={() => setShowDeclineConfirm(false)}>
                            <Text>HỦY</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 90, 
        height: 90, 
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
    deleteAction: {
        padding: 10,
        height: 50,
        justifyContent: 'center',
        borderRadius: 3,
    },
    deleteContainer: {
        padding: 20,
        backgroundColor: Colors.WHITE,
        width: '90%',
        borderRadius: 3,
        paddingBottom: 10,
        paddingRight: 10,
    },
})