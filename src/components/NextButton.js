import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import * as Colors from '../assets/Colors';

const styles = StyleSheet.create({
    textButton: {
        fontSize: 14,
        color: Colors.WHITE,
    },
    button: {
        width: Dimensions.get("window").width * 0.9,
        height: 44,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirm: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.WHITE
    },
    refuse: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.BLACK
    }
})
export default function Button({type}) {
    let text;
    switch (type) {
        case "submit":
            text = "Đăng ký";
            break;
        case "confirm":
            text = "Xác nhận";
            break;
        case "refuse":
            text = "Tôi không nhận được mã";
            break;
        default: 
            text = "Tiếp";
    }
    return(
        <View style={[styles.button, {backgroundColor: type == 'refuse' ? Colors.GAINSBORO : Colors.BLUE}]}>
            <Text style={type == 'confirm' ? styles.confirm : (type == 'refuse' ? styles.refuse : styles.textButton)}>{text}</Text>
        </View>
    )
}