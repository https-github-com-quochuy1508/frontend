import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import Ion from 'react-native-vector-icons/Ionicons';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Oct from 'react-native-vector-icons/Octicons';
import Font from 'react-native-vector-icons/Fontisto';
import Modal from 'react-native-modal';
import * as Colors from '../../../assets/Colors';
import {requestGetInfoFriend} from '../../../redux/actions/userAction';
import {connect} from 'react-redux';

function OtherWall({route, navigation, requestGetInfoFriend, infoFriends}) {
  const [press, setPress] = useState(0);
  const [friend, setFriend] = useState(0);
  const [info, setInfo] = useState(null);
  const [requestModal, setRequestModal] = useState(false);
  const [answerModal, setAnswerModal] = useState(false);

  useEffect(() => {
    const {userId} = route.params;
    console.log('userId: ', userId);
    requestGetInfoFriend(userId);
  }, []);

  useEffect(() => {
    if (infoFriends) {
      setInfo(infoFriends);
    }
  }, [infoFriends]);

  const blueButtonHandle = () => {
    switch (friend) {
      case 0:
        setFriend(1);
        break;
      case 1:
        setRequestModal(true);
        break;
      case 2:
        setAnswerModal(true);
        break;
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <TouchableHighlight
          onPress={() => navigation.goBack()}
          underlayColor={Colors.LIGHTGRAY}
          style={styles.backButton}>
          <Ant name="arrowleft" size={24} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('Search')}
          underlayColor={Colors.GAINSBORO}
          style={styles.searchButton}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Oct
              name="search"
              size={16}
              color={Colors.DARKGRAY}
              style={{marginHorizontal: 10}}
            />
            <Text style={{color: Colors.DARKGRAY, fontSize: 16}}>Tìm kiếm</Text>
          </View>
        </TouchableHighlight>
      </View>
      <ScrollView style={styles.container}>
        <View>
          <Image
            style={styles.cover}
            source={{
              uri: info && info.avatarCover,
            }}
          />
          <Image
            style={styles.avatar}
            source={{
              uri: info && info.avatar,
            }}
          />
        </View>
        <Text style={styles.name}>{info && info.name}</Text>
        <View style={{flexDirection: 'row'}}>
          {friend == 4 ? (
            <View style={{flexDirection: 'row'}}>
              <TouchableHighlight
                style={styles.storyBtn}
                underlayColor="#185df3"
                onPress={() => {}}>
                <Text
                  style={{
                    color: Colors.WHITE,
                    alignSelf: 'center',
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  <Font name="messenger" size={18} /> Nhắn tin
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.messBtn}
                underlayColor={Colors.GAINSBORO}
                onPress={() => {}}>
                <Ion name="person" size={18} />
              </TouchableHighlight>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableHighlight
                style={styles.storyBtn}
                underlayColor="#185df3"
                onPress={() => blueButtonHandle()}>
                <Text
                  style={{
                    color: Colors.WHITE,
                    alignSelf: 'center',
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  <Ion name="person-add" size={18} />
                  {friend == 0
                    ? ' Thêm bạn bè'
                    : friend == 1
                    ? ' Đã gửi lời mời'
                    : ' Trả lời'}
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.messBtn}
                underlayColor={Colors.GAINSBORO}
                onPress={() => {}}>
                <Font name="messenger" size={18} />
              </TouchableHighlight>
            </View>
          )}
          <Pressable
            style={[
              styles.ellipsis,
              {backgroundColor: press == 7 ? Colors.GAINSBORO : '#e5e6eb'},
            ]}
            onTouchStart={() => setPress(7)}
            onTouchEnd={() => setPress(0)}
            onPressOut={() => setPress(0)}
            onPress={() => {}}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 12,
              }}>
              …
            </Text>
          </Pressable>
        </View>
        <View style={styles.infoWrap}>
          <Text style={styles.infoText}>
            <FA5 name="home" size={20} color={'#8a8d92'} /> Sống tại{' '}
            <Text style={{fontWeight: 'bold'}}>Hà Nội</Text>
          </Text>
        </View>

        <View>
          <Pressable
            disabled={true}
            style={[
              {backgroundColor: press == 4 ? Colors.GAINSBORO : Colors.WHITE},
              {paddingTop: '4%'},
              styles.friendWrap,
            ]}
            // onTouchStart={() => setPress(4)}
            // onTouchEnd={() => setPress(0)}
            // onPressOut={() => setPress(0)}
          >
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold', fontSize: 19}}>Bạn bè</Text>
            </View>

            <Text style={{fontSize: 17, color: '#6b6b6f'}}>362 người bạn</Text>
          </Pressable>
        </View>

        <View style={{marginTop: 10, paddingLeft: '4%', paddingRight: '4%'}}>
          <View style={{flexDirection: 'row'}}>
            <Pressable style={styles.friend}>
              <Image
                style={styles.friendAvatar}
                source={{
                  uri:
                    'https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/131236710_1339039849761962_4246873994153994660_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=xVWpaB-rLjwAX_98mUL&_nc_ht=scontent-hkg4-2.xx&oh=e23018e2f55a11f8fc4055b91a3c627d&oe=5FF846BD',
                }}
              />
              <Text style={styles.friendName}>Quân Nguyễn</Text>
            </Pressable>
            <View style={styles.friend}>
              <Image
                style={styles.friendAvatar}
                source={{
                  uri:
                    'https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/131236710_1339039849761962_4246873994153994660_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=xVWpaB-rLjwAX_98mUL&_nc_ht=scontent-hkg4-2.xx&oh=e23018e2f55a11f8fc4055b91a3c627d&oe=5FF846BD',
                }}
              />
              <Text style={styles.friendName}>Phạm Đình Thắng</Text>
            </View>
            <View style={styles.friend}>
              <Image
                style={styles.friendAvatar}
                source={{
                  uri:
                    'https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/131236710_1339039849761962_4246873994153994660_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=xVWpaB-rLjwAX_98mUL&_nc_ht=scontent-hkg4-2.xx&oh=e23018e2f55a11f8fc4055b91a3c627d&oe=5FF846BD',
                }}
              />
              <Text style={styles.friendName}>Nguyễn Xuân Hoạt</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={styles.friend}>
              <Image
                style={styles.friendAvatar}
                source={{
                  uri:
                    'https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/131236710_1339039849761962_4246873994153994660_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=xVWpaB-rLjwAX_98mUL&_nc_ht=scontent-hkg4-2.xx&oh=e23018e2f55a11f8fc4055b91a3c627d&oe=5FF846BD',
                }}
              />
              <Text style={styles.friendName}>Quân Nguyễn</Text>
            </View>
            <View style={styles.friend}>
              <Image
                style={styles.friendAvatar}
                source={{
                  uri:
                    'https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/131236710_1339039849761962_4246873994153994660_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=xVWpaB-rLjwAX_98mUL&_nc_ht=scontent-hkg4-2.xx&oh=e23018e2f55a11f8fc4055b91a3c627d&oe=5FF846BD',
                }}
              />
              <Text style={styles.friendName}>Hồ Quốc Huy</Text>
            </View>
            <View style={styles.friend}>
              <Image
                style={styles.friendAvatar}
                source={{
                  uri:
                    'https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/131236710_1339039849761962_4246873994153994660_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=xVWpaB-rLjwAX_98mUL&_nc_ht=scontent-hkg4-2.xx&oh=e23018e2f55a11f8fc4055b91a3c627d&oe=5FF846BD',
                }}
              />
              <Text style={styles.friendName}>Lê Minh Đức</Text>
            </View>
          </View>
        </View>

        <Pressable
          style={[
            styles.seeMoreBtn,
            {backgroundColor: press == 6 ? Colors.GAINSBORO : '#e5e6eb'},
          ]}
          onTouchStart={() => setPress(6)}
          onTouchEnd={() => setPress(0)}
          onPressOut={() => setPress(0)}>
          <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
            Xem tất cả bạn bè
          </Text>
        </Pressable>
        <View style={styles.posting}>
          <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: '4%'}}>
            Bài viết
          </Text>
          {friend == 4 ? (
            <TouchableHighlight
              style={styles.postWrap}
              onPress={() => {}}
              underlayColor={Colors.WHITESMOKE}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.postAvatar}
                  source={{
                    uri:
                      'https://scontent-sin6-1.xx.fbcdn.net/v/t1.15752-9/130720265_169936591506039_5571318822476082269_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=B7jb8LKVm9AAX_iKd3V&_nc_ht=scontent-sin6-1.xx&oh=4fcda1e478e529511fa48c6397ff35b1&oe=5FF7AAB2',
                  }}
                />
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: '4%',
                    color: '#8c8f94',
                    alignSelf: 'center',
                    marginTop: '2%',
                  }}>
                  Viết điều gì đó cho Quân?
                </Text>
              </View>
            </TouchableHighlight>
          ) : null}
        </View>
      </ScrollView>
      <Modal
        style={{alignItems: 'center'}}
        isVisible={requestModal}
        onBackButtonPress={() => setRequestModal(false)}
        onBackdropPress={() => setRequestModal(false)}
        backdropOpacity={0.6}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View style={styles.deleteContainer}>
          <Text style={{fontSize: 18, marginBottom: 20}}>
            Huỷ yêu cầu kết bạn?
          </Text>
          <Text style={{fontSize: 15, color: Colors.DARKGRAY}}>
            Bạn không muốn thêm người ngày làm bạn bè trên Fakebook nữa.
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
              onPress={() => {
                setFriend(0);
                setRequestModal(false);
              }}>
              <Text style={{color: Colors.BLUE}}>ĐỒNG Ý</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.deleteAction}
              underlayColor={Colors.GRAY91}
              onPress={() => setRequestModal(false)}>
              <Text>HỦY</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Modal
        style={{alignItems: 'center'}}
        isVisible={answerModal}
        onBackButtonPress={() => setAnswerModal(false)}
        onBackdropPress={() => setAnswerModal(false)}
        backdropOpacity={0.6}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View style={styles.deleteContainer}>
          <Text style={{fontSize: 18, marginBottom: 20}}>
            Chấp nhận lời mời kết bạn?
          </Text>
          <Text style={{fontSize: 15, color: Colors.DARKGRAY}}>
            Chấp nhận người ngày làm bạn bè trên Fakebook.
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
              onPress={() => {
                setFriend(4);
                setAnswerModal(false);
              }}>
              <Text style={{color: Colors.BLUE}}>CHẤP NHẬN</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.deleteAction}
              underlayColor={Colors.GRAY91}
              onPress={() => {
                setFriend(0);
                setAnswerModal(false);
              }}>
              <Text>XÓA LỜI MỜI</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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
  container: {
    backgroundColor: Colors.WHITE,
    marginBottom: 50,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    paddingVertical: 7,
    borderBottomColor: Colors.LIGHTGRAY,
    borderBottomWidth: 0.6,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  searchButton: {
    backgroundColor: Colors.WHITESMOKE,
    padding: 10,
    width: '83%',
    borderRadius: 20,
  },
  editBtn: {
    width: '100%',
    backgroundColor: Colors.ALICEBLUE97,
    justifyContent: 'center',
    height: 35,
    borderRadius: 5,
    marginBottom: 15,
  },

  cover: {
    width: '92%',
    height: 220,
    marginTop: 15,
    marginLeft: '4%',
    marginRight: '4%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    top: -105,
    left: 100,
    borderWidth: 5,
    borderColor: '#ffffff',
    marginBottom: -95,
  },

  name: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 28,
  },

  storyBtn: {
    marginTop: 15,
    marginLeft: '4%',
    backgroundColor: '#1878f3',
    width: '71%',
    height: 35,
    justifyContent: 'center',
    borderRadius: 5,
  },
  messBtn: {
    marginTop: 15,
    marginLeft: '3%',
    backgroundColor: '#e5e6eb',
    width: '12%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  ellipsis: {
    backgroundColor: '#e5e6eb',
    width: '12%',
    height: 35,
    justifyContent: 'center',
    marginLeft: -23,
    marginTop: 15,
    borderRadius: 5,
  },

  coverBtn: {
    position: 'absolute',
    left: '83%',
    top: '54%',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e5e6eb',
    justifyContent: 'center',
  },

  avatarBtn: {
    position: 'absolute',
    left: '65%',
    top: '80%',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e5e6eb',
    justifyContent: 'center',
  },

  grayCircle: {
    marginLeft: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e5e6eb',
    justifyContent: 'center',
  },

  camera: {
    fontSize: 18,
    alignSelf: 'center',
  },

  modal: {
    margin: 0,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 15,
  },

  viewCoverContainer: {
    marginTop: 5,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    height: 60,
  },

  coverModal: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  icon: {
    alignSelf: 'center',
  },

  infoWrap: {
    marginTop: '5%',
    borderTopWidth: 1,
    width: '92%',
    marginLeft: '4%',
    borderTopColor: '#e5e6eb',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e6eb',
  },

  infoText: {
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 18,
  },

  friendWrap: {
    width: '100%',
    paddingLeft: '4%',
    paddingRight: '4%',
  },

  friend: {
    width: 120,
    marginRight: 4,
  },

  friendName: {
    width: 110,
    fontWeight: 'bold',
    marginLeft: '2%',
    fontSize: 16,
  },

  friendAvatar: {
    width: 114,
    height: 114,
    borderRadius: 10,
  },

  seeMoreBtn: {
    width: '92%',
    height: 35,
    marginLeft: '4%',
    backgroundColor: '#e5e6eb',
    justifyContent: 'center',
    borderRadius: 6,
    marginTop: 20,
    marginBottom: 20,
  },

  posting: {
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderTopColor: '#c9ccd1',
    borderBottomColor: '#c9ccd1',
    width: '100%',
    paddingTop: '3%',
  },

  postAvatar: {
    marginTop: '4%',
    marginLeft: '4%',
    width: 40,
    height: 40,
    borderRadius: 25,
  },

  postWrap: {
    marginTop: '2%',
    flexDirection: 'row',
    paddingBottom: '2%',
  },
});

const mapStateToProps = (state) => {
  console.log('state: ', state.friend);
  const friend = state.friend;
  let infoFriends = null;
  if (friend && friend.infoFriends) {
    infoFriends = friend.infoFriends;
  }

  return {infoFriends};
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestGetInfoFriend: (id) => {
      dispatch(requestGetInfoFriend(id));
    },
  };
};

const OtherWallConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OtherWall);

export default OtherWallConnected;
