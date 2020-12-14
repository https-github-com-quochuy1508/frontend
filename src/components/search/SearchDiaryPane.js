import React from 'react';
import {View, Text, StyleSheet, Image,Alert,  TouchableOpacity,} from 'react-native';
import * as Colors from '../../assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchDiaryPane({date}) {
    const onPress = () => {};
    const keyword = "gấu của bạn"
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity
    //   activeOpacity={0.8}
      >
        <View style={styles.diaryPane}>
          <Icon
            name="search"
            style={styles.searchIcon}
            size={20}
            color={'#FFF'}
          />
          <View style={styles.diaryText}>
            <Text>Bạn đã tìm kiếm trên FakeBook </Text>
            <Text>"{keyword}"</Text>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
              <Icon
                name="lock-closed"
                style={styles.lockIcon}
                size={15}
                color={'#999'}
              />
              <Text style={{color:'#666',fontSize:13}}>Chỉ mình tôi </Text>
              <Icon
                name="logo-chrome"
                style={styles.dotIcon}
                size={3}
                color={'#666'}
              />
              <Text style={{color:'#666',fontSize:13}}>Đã ẩn khỏi dòng thời gian </Text>
            </View>
          </View>
          <TouchableOpacity>
          <Icon
            name="close"
            style={styles.closeIcon}
            size={30}
            color={'#999'}
          />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  date: {
    color: '#111',
    fontWeight: '700',
    marginVertical: 20,
  },
  diaryPane: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#eee',
  },
  searchIcon: {
    height: 50,
    width: 50,
    textAlign: 'center',
    lineHeight: 50,
    backgroundColor: Colors.BLUE,
    borderRadius: 50,
    marginRight: 10,
  },
  diaryText: {
    // width:
    flexGrow: 1,
  },
  lockIcon:{
    marginRight:5,
  },
  dotIcon:{
    marginHorizontal:3,
  },
});