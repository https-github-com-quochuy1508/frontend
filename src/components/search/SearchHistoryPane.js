import React from 'react';
import {View, Text, StyleSheet, Image,Alert } from 'react-native';
import * as Colors from '../../assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function SearchHistoryPane({keyword}) {
    const onPress = () => {};
    const createTwoButtonAlert = () =>
    Alert.alert(
      "Xóa tìm kiếm này khỏi lịch sử của bạn",
      "Bạn đã tìm kiếm nọi dung này trước đây, nếu bạn xóa {keyword} khỏi lịch sử, tìm kiếm đó sẽ bị gỡ khỏi lịch sử trên tất cả các thiết bị.",
      [
        {
          text: "Hủy",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Xóa", onPress: () => console.log("OK Pressed"), 
        style: 'destructive'
      }
      ],
      { cancelable: false }
    );
  return (
    <View style={styles.container}>
      <TouchableHighlight 
      onPress={onPress} underlayColor={'#eee'}
      onLongPress={createTwoButtonAlert}
      >
        <View style={styles.searchItem}>
          <View style={{flexDirection:'row'}}>
          <Icon name={'search'} size={16} style={styles.searchIcon} />
          <Text style={styles.keySearch}>{keyword}</Text>
          </View>
          <TouchableHighlight onPress={createTwoButtonAlert}
          underlayColor={'#ccc'}
          style={styles.delettButton}>
            <Icon name={"close-outline"} size={16} style={styles.deleteIcon} />
          </TouchableHighlight>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }, 
  searchItem:{
    flexDirection: 'row',
    height: 'auto',
    // width:'100%',
    paddingVertical:8,
    alignItems:'center',
    paddingHorizontal:20,
    justifyContent:'space-between'
    // position:'relative',
  },
  searchIcon:{
    marginRight:25,
  },
  delettButton:{
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
  },
  deleteIcon:{

  },
});