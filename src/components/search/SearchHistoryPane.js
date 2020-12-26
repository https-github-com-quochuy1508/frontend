import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import * as Colors from '../../assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

export default function SearchHistoryPane({keyword}) {
  const [showModal, setShowModal] = useState(false);
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <TouchableHighlight 
      onPress={onPress} underlayColor={'#eee'}
      onLongPress={() => setShowModal(true)}
      >
        <View style={styles.searchItem}>
          <View style={{flexDirection:'row'}}>
          <Icon name={'search'} size={16} style={styles.searchIcon} />
          <Text style={styles.keySearch}>{keyword}</Text>
          </View>
          <TouchableHighlight onPress={() => setShowModal(true)}
          underlayColor={'#ccc'}
          style={styles.delettButton}>
            <Icon name={"close-outline"} size={16} style={styles.deleteIcon} />
          </TouchableHighlight>
        </View>
      </TouchableHighlight>
      <Modal
        style={{alignItems: 'center'}}
        isVisible={showModal}
        onBackButtonPress={() => setShowModal(false)}
        onBackdropPress={() => setShowModal(false)}
        backdropOpacity={0.6}
        animationIn="zoomIn"
        animationOut="zoomOut"
      >
        <View style={styles.deleteContainer}>
          <Text style={{fontSize: 18, marginBottom: 20}}>Xóa tìm kiếm này khỏi lịch sử của bạn?</Text>
          <Text style={{fontSize: 16 ,color: Colors.DARKGRAY}}>Bạn đã tìm kiếm nội dung này trước đây. Nếu bạn xóa ... khỏi lịch sử, tìm kiếm đó sẽ bị gỡ khỏi lịch sử trên tất cả các thiết bị.</Text>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10}}>
          <TouchableHighlight 
            style={styles.deleteAction} 
            underlayColor={Colors.GRAY91}
            onPress={() => setShowModal(false)}>
            <Text style={{color: Colors.BLACK}}>HỦY</Text>
          </TouchableHighlight>
            <TouchableHighlight 
              style={styles.deleteAction} 
              underlayColor={Colors.GRAY91}
              onPress={() => setShowModal(false)}>
              <Text style={{color: Colors.RED}}>XÓA</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
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
  deleteAction: {
    padding: 10, 
    height: 50, 
    justifyContent: "center", 
    borderRadius: 3,
  },
  deleteContainer: {
    padding: 20,
    backgroundColor: Colors.WHITE,
    width: "90%",
    borderRadius: 3,
    paddingBottom: 10,
    paddingRight: 10,
  },
});