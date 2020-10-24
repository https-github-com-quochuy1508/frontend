import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import * as Colors from '../assets/Colors';

const styles = StyleSheet.create({
    textButton: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000000',
      },
      button: {
        width: Dimensions.get("window").width * 0.9,
        height: 44,
        backgroundColor: '#EBE6E5',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
      },
})
export default function Button() {
    return(
        <View style={styles.button}>
            <Text style={styles.textButton}>Tôi không nhận được mã</Text>
        </View>
    )
}