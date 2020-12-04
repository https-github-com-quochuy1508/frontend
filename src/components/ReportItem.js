import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Colors from '../assets/Colors'
import Oct from 'react-native-vector-icons/Octicons';

export default function ReportType({active, type}) {
    const styles = StyleSheet.create({
        reportItem: {
            fontWeight: "bold", 
            paddingHorizontal: 10, 
            paddingVertical: 8,
            borderRadius: 20,
            fontSize: 13,
            marginRight: 5,
            marginBottom: 10,
            backgroundColor: active == 1 ? Colors.BLUE : Colors.GAINSBORO, 
            color: active == 1 ? Colors.WHITE : Colors.BLACK
        },
    });

    if(type == " Vấn đề khác") 
        return(
            <View style={[styles.reportItem, {flexDirection: "row", backgroundColor: Colors.GAINSBORO}]}>
                <Oct name="search" color={Colors.DARKGRAY} size={20}/>
                <Text style={{fontSize: 13, fontWeight: "bold", color: Colors.BLACK}}>{type}</Text>
            </View>
        )
    return(
        <Text style={styles.reportItem}>{type}</Text>
    )
}