import React, {useState} from 'react';
import {TouchableHighlight, Text, View, Image, StyleSheet} from 'react-native';
import * as Colors from '../../../assets/Colors';
import Modal from 'react-native-modal';
import countTimeAgo from '../../../utils/countTimeAgo';
import {connect} from 'react-redux';
import {updateStatusFriendRequest} from '../../../redux/actions/friendAction';
import {navigation} from '../../../../rootNavigation';

function FriendRequest({data, updateStatusFriendRequest}) {
  const [showAcceptConfirm, setShowAcceptConfirm] = useState(false);
  const [showDeclineConfirm, setShowDeclineConfirm] = useState(false);
  const [decision, setDecision] = useState(0);
  /**
   * Function used for accept friend when clicked button Chấp nhận
   */
  const acceptRequestFriend = () => {
    setShowAcceptConfirm(false);
    setDecision(1);
    updateStatusFriendRequest({id: data.id, status: 2});
  };

  /**
   * Function used for reject friend when clicked button Xóa
   */
  const rejectRequestFriend = () => {
    setShowDeclineConfirm(false);
    setDecision(-1);
    updateStatusFriendRequest({id: data.id, status: 0});
  };

  return (
    <View>
      <TouchableHighlight underlayColor={Colors.GRAY91} onPress={() => navigation.navigate("OtherWall")}>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <Image
            source={{
              uri:
                data.you.avatar ||
                'https://i1.wp.com/www.labelprint.co.za/wp-content/uploads/2018/11/user-icon-image-placeholder-300-grey.jpg?w=300&ssl=1',
            }}
            style={styles.image}
          />
          <View style={{justifyContent: 'center'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                {data.you.name}
              </Text>
              {decision == 0 ? 
              <Text style={{color: Colors.GRAY}}>
                {countTimeAgo(data.createAt)}
              </Text> : null
            }
            </View>
            {decision > 0 ?
            <Text style={{color: Colors.DARKGRAY, fontSize: 15}}>Các bạn đã là bạn bè</Text> : 
              (decision < 0 ? <Text style={{color: Colors.DARKGRAY, fontSize: 15}}>Đã gỡ lời mời</Text> : 
              <View style={{flexDirection: 'row'}}>
                <TouchableHighlight
                  style={[styles.actionButton, {backgroundColor: Colors.BLUE}]}
                  onPress={() => setShowAcceptConfirm(true)}
                  underlayColor="#185df3">
                  <Text style={{fontWeight: 'bold', color: Colors.WHITE}}>
                    Chấp nhận
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={[
                    styles.actionButton,
                    {backgroundColor: Colors.GAINSBORO},
                  ]}
                  underlayColor={Colors.GAINSBORO}
                  onPress={() => setShowDeclineConfirm(true)}>
                  <Text style={{fontWeight: 'bold', color: Colors.BLACK}}>
                    Xóa
                  </Text>
                </TouchableHighlight>
              </View>
              )
            }
          </View>
        </View>
      </TouchableHighlight>
      <Modal
        style={{alignItems: 'center'}}
        isVisible={showAcceptConfirm}
        onBackButtonPress={() => setShowAcceptConfirm(false)}
        onBackdropPress={() => setShowAcceptConfirm(false)}
        backdropOpacity={0.6}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View style={styles.deleteContainer}>
          <Text style={{fontSize: 18, marginBottom: 20}}>
            Chấp nhận lời mời kết bạn?
          </Text>
          <Text style={{fontSize: 15, color: Colors.DARKGRAY}}>
            Bạn chắc chắn muốn thêm người ngày làm bạn bè trên Fakebook.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 10,
            }}>
            <TouchableHighlight
              style={styles.deleteAction}
              underlayColor={Colors.GRAY91}
              onPress={acceptRequestFriend}>
              <Text style={{color: Colors.BLUE}}>ĐỒNG Ý</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.deleteAction}
              underlayColor={Colors.GRAY91}
              onPress={() => setShowAcceptConfirm(false)}>
              <Text>HỦY</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Modal
        style={{alignItems: 'center'}}
        isVisible={showDeclineConfirm}
        onBackButtonPress={() => setShowDeclineConfirm(false)}
        onBackdropPress={() => setShowDeclineConfirm(false)}
        backdropOpacity={0.6}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View style={styles.deleteContainer}>
          <Text style={{fontSize: 18, marginBottom: 20}}>
            Xóa lời mời kết bạn?
          </Text>
          <Text style={{fontSize: 15, color: Colors.DARKGRAY}}>
            Bạn chắc chắn không muốn thêm người ngày làm bạn bè trên Fakebook.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 10,
            }}>
            <TouchableHighlight
              style={styles.deleteAction}
              underlayColor={Colors.GRAY91}
              onPress={rejectRequestFriend}>
              <Text style={{color: Colors.BLUE}}>ĐỒNG Ý</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.deleteAction}
              underlayColor={Colors.GRAY91}
              onPress={() => setShowDeclineConfirm(false)}>
              <Text>HỦY</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateStatusFriendRequest: (params) => {
      dispatch(updateStatusFriendRequest(params));
    },
  };
};

const FriendRequestConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FriendRequest);

export default FriendRequestConnected;
