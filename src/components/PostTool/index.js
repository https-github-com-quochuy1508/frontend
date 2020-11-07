import React, {useState} from 'react'
import { Text, StyleSheet, View, Image, Pressable } from 'react-native'
import { connect } from 'react-redux';
import * as Colors from '../../assets/Colors';
import {navigation} from '../../../rootNavigation';

export default function PostTool() {    
    const [press, setPress] = useState(false);
    const onFullPostToolPressHandler = () => {
        navigation.navigate('FullPostTool')
    }
    const styles = StyleSheet.create({
        container: {
            borderTopColor: Colors.LIGHTGRAY,
            borderTopWidth: 0.5,
            borderBottomColor: Colors.LIGHTGRAY,
            borderBottomWidth: 0.5,
            backgroundColor: Colors.WHITE,
            padding: 10,
            flexDirection: 'row'
        },
        postInputWrapper: {
            borderRadius: 48,
            flex: 1,
            marginLeft: 10,
            justifyContent: 'center',
            borderRadius: 20,
            height: 40,
            width: "100%",
            borderColor: Colors.LIGHTGRAY,
            paddingHorizontal: 20,
            borderWidth: 1,
            backgroundColor: press ? Colors.GAINSBORO : Colors.WHITE,
        },
        userAvatar: {
            width: 40,
            height: 40,
            borderRadius: 50,
        },
    })
    
    return (
        <View style={styles.container}>
            <Pressable>
                <Image source={{ uri: "https://scontent.fhan9-1.fna.fbcdn.net/v/t1.0-9/109937103_1147876648925466_5407335593471103700_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=uKzWS_yxgZAAX9-JzFG&_nc_ht=scontent.fhan9-1.fna&oh=91377309008559c505359fd91e291b66&oe=5FCB1B0D" }} style={styles.userAvatar} ></Image>
            </Pressable>
            <Pressable 
                onPress={() => onFullPostToolPressHandler()} 
                style={styles.postInputWrapper}
                onTouchStart={() => setPress(true)}
                onTouchEnd={() => setPress(false)}
                onPressOut={() => setPress(false)}
            >
                <Text style={{fontSize: 16}}>Bạn đang nghĩ gì?</Text>
            </Pressable>
        </View>
    )
    
}

