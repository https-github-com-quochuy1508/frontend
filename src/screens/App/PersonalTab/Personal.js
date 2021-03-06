import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Pressable,
  RefreshControl,
  TouchableHighlight
} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import Ent from 'react-native-vector-icons/Entypo';
import Ion from 'react-native-vector-icons/Ionicons';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import * as Colors from '../../../assets/Colors';
import {
  requestGetCurrentUser,
  requestChangeUser,
} from '../../../redux/actions/userAction';
import {requestCreatePost} from '../../../redux/actions/postAction';
import userServices from '../../../redux/services/userServices';
import {connect} from 'react-redux';
import Post from '../../../components/Post';
import countTimeAgo from '../../../utils/countTimeAgo';
import ImagePicker from 'react-native-image-picker';
import mediaServices from '../../../redux/services/mediaServices';

const options = {
  title: 'Chọn ảnh',
  takePhotoButtonTitle: 'Chụp ảnh',
  chooseFromLibraryButtonTitle: 'Tải ảnh lên từ thư viện',
  cancelButtonTitle: 'Thoát',
  storageOptions: {
    skipBackup: true,
    path: 'Fakebook',
  },
};

function Personal({
  navigation,
  requestGetCurrentUser,
  currentUser,
  requestChangeUser,
  createPost
}) {
  const [isCoverModalVisible, setCoverModalVisible] = useState(false);
  const [isAvatarModalVisible, setAvatarModalVisible] = useState(false);
  const [press, setPress] = useState(0);
  const [dataUser, setDataUser] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    requestGetCurrentUser();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    requestGetCurrentUser();
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.result) {
      setDataUser(currentUser.result);
    }
  }, [currentUser]);

  const onFullPostToolPressHandler = async (data) => {
    const fakeData = {
      userId: (await userServices.getUserId()) || 0,
    };
    createPost(fakeData);
    navigation.navigate('FullPostTool');
  };
  
  const changeAvatar = (isCover) => {
    ImagePicker.showImagePicker(options, async (response) => {
      // console.log('response: ', response);
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        let photo = {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        };

        let formdata = new FormData();
        formdata.append('myFiles', photo);
        setAvatarModalVisible(false);
        setCoverModalVisible(false);
        await mediaServices
          .uploadAvatar(formdata)
          .then((response) => {
            // Case avatar cover
            const dataUserChange = {
              id: dataUser.id,
            };
            if (isCover) {
              dataUserChange.avatarCover = response.path;
            } else {
              // case avatar nomal
              dataUserChange.avatar = response.path;
            }
            requestChangeUser(dataUserChange);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <ScrollView 
      style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[Colors.BLUE]}/>}
    >
      <View>
        <Image
          style={styles.cover}
          source={{
            uri: dataUser && dataUser.avatarCover,
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
            uri: dataUser && dataUser.avatar,
          }}
        />
        <Pressable
          style={styles.avatarBtn}
          onPress={() => setAvatarModalVisible(true)}>
          <Ent name="camera" style={styles.camera}></Ent>
        </Pressable>
      </View>
      <Text style={styles.name}>{dataUser && dataUser.name}</Text>
      <View style={{flexDirection: 'row'}}>
        <Pressable style={styles.storyBtn}>
          <Text style={{color: '#ffffff', alignSelf: 'center', fontSize: 15, fontWeight: 'bold'}}>
            <Ant name="pluscircle" style={{fontSize: 15}} /> Thêm vào tin
          </Text>
        </Pressable>
        <TouchableHighlight
          style={styles.ellipsis}
          underlayColor={Colors.GAINSBORO}
          onPress={() => navigation.navigate('WallSetting')}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 12,
            }}>
            …
          </Text>
        </TouchableHighlight>
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
            onPress={() => changeAvatar(true)}>
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
            onPress={() => changeAvatar(false)}>
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
          onPress={() => navigation.navigate('WallEdit')}>
          <Text style={{color: Colors.AZURE91, alignSelf: 'center', fontWeight: "bold"}}>
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
        <TouchableHighlight
          style={styles.postWrap}
          underlayColor={Colors.WHITESMOKE}
          onPress={() => onFullPostToolPressHandler()}
        >
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.postAvatar}
              source={{
                uri: dataUser && dataUser.avatar,
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
          </View>
        </TouchableHighlight>
      </View>
      <View style={{backgroundColor: "#c9ccd1"}}>
        {dataUser &&
          dataUser.posts &&
          Array.isArray(dataUser.posts) &&
          dataUser.posts.map((post) => {
            return (
              <Post
                key={post.id}
                liked={true}
                countLike={post.likes.length}
                countComment={post.comments.length}
                postId={post.id}
                userInfo={post.users}
                time={countTimeAgo(post.createAt)}
                content={post.content || ''}
                medias={[]}
                comments={post.comments}
              />
            );
          })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
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
    borderTopColor: '#c9ccd1',
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
  // console.log('state: ', state.currentUser);
  let currentUser = state.currentUser;
  if (state.currentUser && currentUser.resultChange) {
    currentUser = {
      ...currentUser.result,
      ...currentUser.resultChange,
    };
  }

  return {currentUser};
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestGetCurrentUser: () => {
      dispatch(requestGetCurrentUser());
    },
    requestChangeUser: (data) => {
      dispatch(requestChangeUser(data));
    },
    createPost: (params) => {
      dispatch(requestCreatePost(params));
    },
  };
};

const PersonalConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Personal);

export default PersonalConnected;
