import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView,
  Pressable,
} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import Oct from 'react-native-vector-icons/Octicons';
import Mat from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Colors from '../../../assets/Colors';
import Modal from 'react-native-modal';
import FriendCard from './FriendSuggest';

export default function FriendSuggest({navigation}) {
  const [showSort, setShowSort] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
          underlayColor={Colors.LIGHTGRAY}>
          <Ant name="arrowleft" size={24} />
        </TouchableHighlight>
        <Text style={styles.title}>Gợi ý</Text>
        <TouchableHighlight
          style={styles.search}
          underlayColor={Colors.LIGHTGRAY}
          onPress={() => {}}>
          <Oct name="search" size={24} />
        </TouchableHighlight>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.requestHeader}>
          <Text style={styles.suggestText}>Những người bạn có thể biết</Text>
        </View>
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </ScrollView>
      <Modal
        style={{margin: 0}}
        isVisible={showSort}
        onBackButtonPress={() => setShowSort(false)}
        onSwipeComplete={() => setShowSort(false)}
        onBackdropPress={() => setShowSort(false)}
        swipeDirection="down"
        backdropOpacity={0.1}>
        <View style={styles.modalContent}>
          <Pressable style={styles.action}>
            <Mat name="sort" size={30} style={{marginRight: 10}} />
            <Text style={styles.actionText}>Mặc định</Text>
          </Pressable>
          <Pressable style={styles.action} onPress={() => setShowSort(false)}>
            <Mat name="sort-descending" size={30} style={{marginRight: 10}} />
            <Text style={styles.actionText}>Bạn bè mới nhất trước tiên</Text>
          </Pressable>
          <Pressable style={styles.action} onPress={() => setShowSort(false)}>
            <Mat name="sort-ascending" size={30} style={{marginRight: 10}} />
            <Text style={styles.actionText}>
              Bạn bè lâu năm nhất trước tiên
            </Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
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
  title: {
    fontSize: 17,
    marginLeft: 5,
  },
  backIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  search: {
    borderRadius: 20,
    marginRight: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  suggestText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  requestHeader: {
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    color: Colors.RED,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonSeeAll: {
    position: 'absolute',
    right: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  seeAll: {
    fontSize: 17,
    color: Colors.BLUE,
  },
  action: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    width: '95%',
  },
  actionText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.BLACK,
  },
  modalContent: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: Colors.WHITE,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 5,
  },
});
