import React from 'react';
import {TouchableHighlight, Text, View, Image, StyleSheet} from 'react-native'
import * as Colors from '../../../assets/Colors';

export default function FriendSuggest() {
    return (
        <TouchableHighlight
            underlayColor={Colors.GRAY91}
            onPress={() => {}}
        >
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
                <Image source={{uri: 'https://scontent.fhan7-1.fna.fbcdn.net/v/t1.0-9/88156367_918464705252110_7654917145054150656_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=QEbZLWudpYcAX96k52q&_nc_ht=scontent.fhan7-1.fna&oh=106fa940f199f46440821e4b97ad9cae&oe=5FF8EB2B'}}
                    style={styles.image}
                />
                <View style={{justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Xuân Dương Hoa</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableHighlight 
                            style={[styles.actionButton, {backgroundColor: Colors.BLUE}]}
                            onPress={() => {}}
                            underlayColor="#185df3"
                        >
                            <Text style={{fontWeight: "bold", color: Colors.WHITE}}>Thêm bạn bè</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            style={[styles.actionButton, {backgroundColor: Colors.GAINSBORO}]}
                            underlayColor={Colors.GAINSBORO}
                            onPress={() => {}}
                        >
                            <Text style={{fontWeight: "bold", color: Colors.BLACK}}>Gỡ</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 90, 
        height: 90, 
        borderRadius: 50,
        marginLeft: 15,
        marginRight: 10,
    },
    actionButton: {
        width: 120,
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        marginTop: 15,
    },
})