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
        backgroundColor: Colors.BLUE,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
      },
})
export default function Button() {
    return(
        <View style={styles.button}>
            <Text style={styles.textButton}>Tiếp</Text>
        </View>
    )
}