import React from 'react';
import { Text, StyleSheet, View } from 'react-native'
import NotificationItemContainer from './NotificationItem';

export default function NotificationList() {
  const notifications = [1, 2, 3]
    if (notifications.length === 0) return <View></View>
    return (
        <View >
            {notifications.map((item, index) => (
                <NotificationItemContainer key={index}  />
            ))}
        </View>
    )
}