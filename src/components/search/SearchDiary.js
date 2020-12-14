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

export default function SearchForm({navigation}){
    const onPress= () =>{};
return (
  <View style={styles.container}>
    <TouchableHighlight
      style={styles.deleteSearch}
      onpress={onPress}
      underlayColor={'#ccc'}>
      <Text style={{color: Colors.BLUE}}>Xóa các tìm kiếm</Text>
    </TouchableHighlight>
    <ScrollView>
      <SearchDiaryPane
        date="13 Thang 12 2020"
      />
    </ScrollView>
  </View>
);}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF',
        paddingHorizontal:15,
    },
    deleteSearch: {
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#CCC',
        borderBottomWidth:0.3,
    },
});