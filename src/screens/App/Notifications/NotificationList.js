import React from 'react';
import { View } from 'react-native'
import NotificationItem from './NotificationItem';

export default function NotificationList() {
  const notifications = [1, 2, 3]
    if (notifications.length === 0) return <View></View>
    return (
        <View >
            {notifications.map((item, index) => (
                <NotificationItem key={index} type={2} isRead={true} />
            ))}
        </View>
    )
}