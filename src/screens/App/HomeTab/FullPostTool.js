import React from 'react';
import {View, StyleSheet, Text, Image, TextInput} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import Oct from 'react-native-vector-icons/Octicons';
import Font5 from 'react-native-vector-icons/FontAwesome5';

import * as Colors from '../../../assets/Colors'
export default function FullPostTool() {
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
        },
        post: {
            position: "absolute",
            right: 20,
        },
        headContainer: {
            flexDirection: "row",
            margin: 15
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
            width: 110,
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
            fontSize: 13,
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
        }
    })
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Ant name="arrowleft" size={24} style={{margin: 10}}/>
                <Text style={styles.title}>Tạo bài viết</Text>
                <Text style={styles.post}>ĐĂNG</Text>
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
            />
            <View style={styles.addContainer}>
                <Text style={{fontSize: 16}}>Thêm vào bài viết của bạn</Text>
                <View style={styles.iconGroup}>
                    <Oct name="device-camera-video" size={24}/>
                    <Ant  name="picture" size={24}/>
                    <Font5 name="user-tag" size={24}/>
                    <Oct name="smiley" size={24}/>
                </View>
            </View>
        </View>
    )
}