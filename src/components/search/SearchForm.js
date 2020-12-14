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
import * as Colors from '../../assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchHistoryPane from './SearchHistoryPane';

export default function SearchForm({navigation}){
  const onPress = () => {};

    return (
      <View style={styles.container}>
        <View style={styles.inputSearch}>
          <TouchableHighlight
            style={styles.back_button}
            onPress={onPress}
            underlayColor={'#ccc'}>
            <Icon name="arrow-back" size={25} />
          </TouchableHighlight>
          <TextInput
            style={styles.inputForm}
            placeholder="Tìm kiếm "
            multiline={true}
            autoFocus={true}
          />
        </View>

        <ScrollView style={styles.listSearch}>
          <View style={styles.recent}>
            <Text style={{fontWeight: '600'}}>Mới đây </Text>
            <TouchableHighlight
              style={styles.editButton}
              onPress={() => navigation.navigate("Nhật ký hoạt động")} activeOpacity={0.8}
              underlayColor={'#ccc'}>
              <Text style={{color: '#666'}}>CHỈNH SỬA</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.history}>
            <SearchHistoryPane keyword="ascasd" />
            <SearchHistoryPane keyword="ascasd" />
            <SearchHistoryPane keyword="ascasd" />
          </View>
        </ScrollView>
      </View>
    );
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#FFF',
    //   height:100,
    },
    listSearch:{
      flex:1,
    },
    inputForm:{
        height:'78%',
        width:'88%',
        borderRadius:30,
        fontSize:16,
        backgroundColor: Colors.WHITESMOKE,
        paddingHorizontal: 20,
      },
      inputSearch:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        height: 52,
        backgroundColor:Colors.WHITE,
        alignItems:'center',
        paddingHorizontal:10,
        borderBottomColor:'#ccc',
        borderBottomWidth:0.5, 
      },
      back_button:{
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        // backgroundColor: Colors.GAINSBORO,
      },
      recent:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:10,
        paddingHorizontal:15,
        borderBottomWidth:0.5,
        borderBottomColor:'#ccc',
      },  
      editButton:{
        padding:2,
        paddingHorizontal:5,
        borderRadius:3,
      },
      history:{
        // padding:10,
        // alignItems:'center',
      },
});
