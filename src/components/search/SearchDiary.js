import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { color } from 'react-native-reanimated';
import * as Colors from '../../assets/Colors';
import SearchDiaryPane from './SearchDiaryPane';
import Ant from 'react-native-vector-icons/AntDesign';

export default function SearchForm({navigation}){
    const onPress= () =>{};
return (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableHighlight
        style={styles.backIcon}
        onPress={() => navigation.goBack()}
        underlayColor={Colors.LIGHTGRAY}>
        <Ant name="arrowleft" size={20} />
      </TouchableHighlight>
      <Text style={styles.title}>Nhật ký hoạt động</Text>
    </View>
    <View style={{paddingHorizontal:15,}}>
    <TouchableHighlight
      style={styles.deleteSearch}
      onpress={onPress}
      underlayColor={'#ccc'}>
      <Text style={{color: Colors.BLUE}}>Xóa các tìm kiếm</Text>
    </TouchableHighlight>
    <ScrollView>
      <SearchDiaryPane date="13 Thang 12 2020" />
      <SearchDiaryPane date="13 Thang 12 2020" />
    </ScrollView>
    </View>
  </View>
);}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF',
        // paddingHorizontal:15,
    },
    deleteSearch: {
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#CCC',
        borderBottomWidth:0.3,
    },
    header: {
      flexDirection: 'row',
      width: '100%',
      height: 50,
      padding: 10,
      borderBottomColor: Colors.LIGHTGRAY,
      borderBottomWidth: 0.5,
      alignItems: 'center',
    },
    backIcon: {
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    title: {
      fontSize: 17,
      marginLeft: 5,
    },
});