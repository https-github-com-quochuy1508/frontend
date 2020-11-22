import React, {useState} from 'react'
import { Text, StyleSheet, View, Image, Pressable } from 'react-native'
import { connect } from 'react-redux';
import * as Colors from '../../assets/Colors';
import {navigation} from '../../../rootNavigation';

function PostTool({users}) {    
    const [press, setPress] = useState(false);

    const onFullPostToolPressHandler = () => {
        navigation.navigate('FullPostTool')
    }
    
    return (
        <View style={styles.container}>
            <Pressable>
                <Image source={{ uri: users.result != null ? users.result.avatar : null}} style={styles.userAvatar} ></Image>
            </Pressable>
            <Pressable 
                onPress={() => onFullPostToolPressHandler()} 
                style={[styles.postInputWrapper, {backgroundColor: press ? Colors.GAINSBORO : Colors.WHITE}]}
                onTouchStart={() => setPress(true)}
                onTouchEnd={() => setPress(false)}
                onPressOut={() => setPress(false)}
            >
                <Text style={{fontSize: 16}}>Bạn đang nghĩ gì?</Text>
            </Pressable>
        </View>
    )
    
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
    },
    userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
})

const mapStateToProps = (state) => state;
const PostToolConnected = connect(mapStateToProps, null)(PostTool);
export default PostToolConnected;