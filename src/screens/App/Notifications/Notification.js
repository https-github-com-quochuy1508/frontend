import React from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import NotificationList from './NotificationList';

export default function Notifications() {
    return (
        <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Thông báo</Text>
                <TouchableOpacity  style={styles.btnSearch}>
                    <FontAwesome5Icon name="search" size={18} />
                </TouchableOpacity>
            </View>
            <Text style={styles.notiTitle}>Mới</Text>
            <NotificationList />
            <Text style={styles.notiTitle}>Trước đó</Text>
            <NotificationList />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    titleWrapper: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        alignItems: 'center',
        marginHorizontal: 20
    },
    btnSearch: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        borderRadius: 40
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    notiTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10,
        marginHorizontal: 20
    }
})