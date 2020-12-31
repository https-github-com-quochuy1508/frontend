import React, {useState, useEffect, useCallback} from 'react';
import { Text, StyleSheet, View, ScrollView, RefreshControl } from 'react-native'
import NotificationList from './NotificationList';
import * as Colors from '../../../assets/Colors';
import Search from '../../../components/SearchButton';

export default function Notifications() {
    const [refreshing, setRefreshing] = useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => {
        setTimeout(resolve, timeout);
        });
    }
    
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <ScrollView 
            showsVerticalScrollIndicator={false} 
            style={styles.container}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[Colors.BLUE]}/>}
        >
            <View style={styles.header}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>Thông báo</Text>
                <Search bgColor={Colors.GRAY91} />
            </View>
            <Text style={styles.notiTitle}>Mới</Text>
            <NotificationList />
            <Text style={styles.notiTitle}>Trước đó</Text>
            <NotificationList />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingLeft: 15,
        justifyContent: 'space-between',
    },
    container: {
        backgroundColor: Colors.WHITE,
        paddingTop: 5,
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