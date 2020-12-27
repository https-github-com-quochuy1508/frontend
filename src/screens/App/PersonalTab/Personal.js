import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableHighlight,
  Button,
} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import Ent from 'react-native-vector-icons/Entypo';
import Sim from 'react-native-vector-icons/SimpleLineIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import Oct from 'react-native-vector-icons/Octicons';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import * as Colors from '../../../assets/Colors';
import {requestGetCurrentUser} from '../../../redux/actions/userAction';
import {connect} from 'react-redux';

function Personal({navigation, requestGetCurrentUser}) {
  const [isCoverModalVisible, setCoverModalVisible] = useState(false);
  const [isAvatarModalVisible, setAvatarModalVisible] = useState(false);
  const [press, setPress] = useState(0);

  useEffect(() => {
    requestGetCurrentUser();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.cover}
          source={{
            uri:
              'https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg',
          }}
        />
        <Pressable
          style={styles.coverBtn}
          onPress={() => setCoverModalVisible(true)}>
          <Ent name="camera" style={styles.camera}></Ent>
        </Pressable>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://scontent-sin6-1.xx.fbcdn.net/v/t1.15752-9/130720265_169936591506039_5571318822476082269_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=B7jb8LKVm9AAX_iKd3V&_nc_ht=scontent-sin6-1.xx&oh=4fcda1e478e529511fa48c6397ff35b1&oe=5FF7AAB2',
          }}
        />
        <Pressable
          style={styles.avatarBtn}
          onPress={() => setAvatarModalVisible(true)}>
          <Ent name="camera" style={styles.camera}></Ent>
        </Pressable>
      </View>
      <Text style={styles.name}>Quân Nguyễn</Text>
      <View style={{flexDirection: 'row'}}>
        <Pressable style={styles.storyBtn}>
          <Text style={{color: '#ffffff', alignSelf: 'center', fontSize: 15}}>
            <Ant name="pluscircle" style={{fontSize: 15}} /> Thêm vào tin
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.ellipsis,
            {backgroundColor: press == 7 ? Colors.GAINSBORO : '#e5e6eb'},
          ]}
          onTouchStart={() => setPress(7)}
          onTouchEnd={() => setPress(0)}
          onPressOut={() => setPress(0)}
          onPress={() => navigation.navigate('Setting')}>
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
      <Modal
        isVisible={isCoverModalVisible}
        backdropOpacity={0.35}
        onBackdropPress={() => setCoverModalVisible(false)}
        style={styles.modal}>
        <View style={styles.coverModal}>
          <Pressable
            style={[
              styles.viewCoverContainer,
              {backgroundColor: press == 1 ? Colors.GAINSBORO : Colors.WHITE},
            ]}
            onTouchStart={() => setPress(1)}
            onTouchEnd={() => setPress(0)}
            onPressOut={() => setPress(0)}
            onPress={() => {
              setCoverModalVisible(false);
            }}>
            <View style={styles.grayCircle}>
              <Ion
                name="image"
                size={20}
                color={Colors.BLACK}
                style={styles.icon}
              />
            </View>
            <Text style={{fontSize: 17, marginLeft: 10}}>Xem ảnh bìa</Text>
          </Pressable>
          <Pressable
            style={[
              styles.viewCoverContainer,
              {backgroundColor: press == 2 ? Colors.GAINSBORO : Colors.WHITE},
            ]}
            onTouchStart={() => setPress(2)}
            onTouchEnd={() => setPress(0)}
            onPressOut={() => setPress(0)}
            onPress={() => {
              setCoverModalVisible(false);
            }}>
            <View style={styles.grayCircle}>
              <Ent
                name="upload"
                size={20}
                color={Colors.BLACK}
                style={styles.icon}
              />
            </View>
            <Text style={{fontSize: 17, marginLeft: 10}}>Tải ảnh lên</Text>
          </Pressable>
        </View>
      </Modal>

      <Modal
        isVisible={isAvatarModalVisible}
        backdropOpacity={0.35}
        onBackdropPress={() => setAvatarModalVisible(false)}
        style={styles.modal}>
        <View style={styles.coverModal}>
          <Pressable
            style={[
              styles.viewCoverContainer,
              {backgroundColor: press == 3 ? Colors.GAINSBORO : Colors.WHITE},
            ]}
            onTouchStart={() => setPress(3)}
            onTouchEnd={() => setPress(0)}
            onPressOut={() => setPress(0)}
            onPress={() => {
              setAvatarModalVisible(false);
            }}>
            <View style={styles.grayCircle}>
              <Ion
                name="images"
                size={20}
                color={Colors.BLACK}
                style={styles.icon}
              />
            </View>
            <Text style={{fontSize: 17, marginLeft: 10}}>
              Chọn ảnh đại diện
            </Text>
          </Pressable>
        </View>
      </Modal>

      <View style={styles.infoWrap}>
        <Text style={styles.infoText}>
          <FA5 name="home" size={20} color={'#8a8d92'} /> Sống tại{' '}
          <Text style={{fontWeight: 'bold'}}>Hà Nội</Text>
        </Text>
        <Pressable
          style={[
            styles.editBtn,
            {
              backgroundColor:
                press == 8 ? Colors.PALEBLUE91 : Colors.ALICEBLUE97,
            },
          ]}
          onTouchStart={() => setPress(8)}
          onTouchEnd={() => setPress(0)}
          onPressOut={() => setPress(0)}
          onPress={() => navigation.navigate('Edit')}>
          <Text style={{color: Colors.AZURE91, alignSelf: 'center'}}>
            Chỉnh sửa chi tiết công khai
          </Text>
        </Pressable>
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
            <Pressable
              style={[
                {backgroundColor: press == 5 ? Colors.GAINSBORO : Colors.WHITE},
                {position: 'absolute', right: 0, padding: 5, borderRadius: 6},
              ]}
              onTouchStart={() => setPress(5)}
              onTouchEnd={() => setPress(0)}
              onPressOut={() => setPress(0)}>
              <Text style={{color: '#3876cc', fontSize: 16}}>Tìm bạn bè</Text>
            </Pressable>
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
        <Text style={{alignSelf: 'center'}}>Xem tất cả bạn bè</Text>
      </Pressable>
      <View style={styles.posting}>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: '4%'}}>
          Bài viết
        </Text>
        <Pressable
          style={[
            styles.postWrap,
            {backgroundColor: press == 7 ? Colors.GAINSBORO : Colors.WHITE},
          ]}
          onTouchStart={() => setPress(7)}
          onTouchEnd={() => setPress(0)}
          onPressOut={() => setPress(0)}>
          <Image
            style={styles.postAvatar}
            source={{
              uri:
                'https://scontent-sin6-1.xx.fbcdn.net/v/t1.15752-9/130720265_169936591506039_5571318822476082269_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=B7jb8LKVm9AAX_iKd3V&_nc_ht=scontent-sin6-1.xx&oh=4fcda1e478e529511fa48c6397ff35b1&oe=5FF7AAB2',
            }}
          />
          <Text
            style={{
              fontSize: 17,
              marginLeft: '4%',
              color: '#8c8f94',
              alignSelf: 'center',
              marginTop: '2%',
            }}>
            Bạn đang nghĩ gì?
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
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
    width: '78%',
    height: 35,
    justifyContent: 'center',
    borderRadius: 5,
  },

  ellipsis: {
    backgroundColor: '#e5e6eb',
    width: '12%',
    height: 35,
    justifyContent: 'center',
    marginLeft: 10,
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestGetCurrentUser: () => {
      dispatch(requestGetCurrentUser());
    },
  };
};

const PersonalConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Personal);

export default PersonalConnected;
