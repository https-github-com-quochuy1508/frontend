import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import * as Colors from '../../assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

export default function SearchResultPane({keyword}) {
  const [showModal, setShowModal] = useState(false);
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={'#eee'}
        onLongPress={() => setShowModal(true)}>
        <View style={styles.searchItem}>
          <View style={{flexDirection: 'row'}}>
            <Icon name={'search'} size={18} style={styles.searchIcon} />
            <Text style={styles.keySearch}>{keyword}</Text>
          </View>
          <TouchableHighlight
            onPress={() => setShowModal(true)}
            underlayColor={'#ccc'}
            style={styles.delettButton}>
            <AntDesign
              name={'arrowright'}
              size={25}
              style={styles.deleteIcon}
            />
          </TouchableHighlight>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchItem: {
    flexDirection: 'row',
    height: 'auto',
    // width:'100%',
    paddingVertical: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    // position:'relative',
  },
  searchIcon: {
    marginRight: 25,
    color: '#999',
  },
  delettButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
    borderRadius: 100,
  },
  deleteIcon: {
    color: '#999',
  },
  deleteAction: {
    padding: 10,
    height: 50,
    justifyContent: 'center',
    borderRadius: 3,
  },
  deleteContainer: {
    padding: 20,
    backgroundColor: Colors.WHITE,
    width: '90%',
    borderRadius: 3,
    paddingBottom: 10,
    paddingRight: 10,
  },
});
