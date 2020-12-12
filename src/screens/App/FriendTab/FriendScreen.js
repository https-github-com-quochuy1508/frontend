import React from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native'
import Search from '../../../components/SearchButton';
import * as Colors from '../../../assets/Colors';
import FriendSuggest from './FriendSuggest';

export default function FriendScreen() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>Bạn bè</Text>
                <Search bgColor={Colors.GRAY91}/>       
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.friendButton}>
                    <Text style={styles.buttonText}>Lời mời kết bạn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.friendButton}>
                    <Text style={styles.buttonText}>Tất cả bạn bè</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.suggestText}>Những người bạn có thể biết</Text>
            <FriendSuggest />
            <FriendSuggest />
            <FriendSuggest />
            <FriendSuggest />
            <FriendSuggest />
            <FriendSuggest />
            <FriendSuggest />
            <FriendSuggest />
            <FriendSuggest />
            <FriendSuggest />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        paddingTop: 5,
    },
    header: {
        flexDirection: 'row', 
        paddingLeft: 15, 
        justifyContent: 'space-between'
    },
    buttonContainer: {
        flexDirection: 'row', 
        marginHorizontal: 15, 
        marginTop: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.GAINSBORO,
        paddingBottom: 15,
    },
    friendButton: {
        backgroundColor: Colors.GRAY91,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginRight: 10,
    },
    buttonText: {
        fontWeight: 'bold', 
        fontSize: 15
    },
    suggestText: {
        fontWeight: 'bold', 
        fontSize: 20, 
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 5,
    },
})