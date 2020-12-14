import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Search from '../../../components/SearchButton';
import * as Colors from '../../../assets/Colors';
import FriendRequest from './FriendRequest';
import {connect} from 'react-redux';
import moment from 'moment';
import {requestListFriendRequest} from '../../../redux/actions/friendAction';

function FriendScreen({
  navigation,
  requestListFriendRequest,
  friendRequestValue,
}) {
  useEffect(() => {
    const param = {
      filter: {
        status: 1,
      }, // status 1 is pending wating for accept
    };
    requestListFriendRequest(param);
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Bạn bè</Text>
        <Search bgColor={Colors.GRAY91} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.friendButton}>
          <Text style={styles.buttonText}>Gợi ý</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.friendButton}
          onPress={() => navigation.navigate('AllFriend')}>
          <Text style={styles.buttonText}>Tất cả bạn bè</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.requestHeader}>
        <Text style={styles.suggestText}>Lời mời kết bạn</Text>
        <Text style={styles.count}>
          {' '}
          {friendRequestValue.count ? friendRequestValue.count : 0}
        </Text>
        <TouchableHighlight
          style={styles.buttonSeeAll}
          onPress={() => {}}
          underlayColor={Colors.GRAY91}>
          <Text style={styles.seeAll}>Xem tất cả</Text>
        </TouchableHighlight>
      </View>
      {friendRequestValue.rows &&
        Array.isArray(friendRequestValue.rows) &&
        friendRequestValue.rows.map((e) => {
          return <FriendRequest key={e.id} />;
        })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    paddingTop: 5,
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 15,
    justifyContent: 'space-between',
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
    fontSize: 15,
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
    padding: 10,
  },
  seeAll: {
    fontSize: 17,
    color: Colors.BLUE,
  },
});

const mapStateToProps = (state) => {
  console.log('state: ', state.friend);
  let friendRequestValue = {};
  if (state.friend) {
    friendRequestValue = state.friend && state.friend.result;
  }
  return {friendRequestValue};
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestListFriendRequest: (params) => {
      dispatch(requestListFriendRequest(params));
    },
  };
};

const FriendConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FriendScreen);

export default FriendConnected;
