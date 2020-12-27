import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
  Keyboard,
  BackHandler,
} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import En from 'react-native-vector-icons/Entypo';
import Oct from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ion from 'react-native-vector-icons/Ionicons';
import * as Colors from '../../../assets/Colors';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';
import AliasImage from '../../../components/AliasImage';
import mediaServices from '../../../redux/services/mediaServices';
import {requestDeleteMedia} from '../../../redux/actions/mediaAction';
import {
  requestUpdatePost,
  requestDeletePost,
} from '../../../redux/actions/postAction';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

function FullPostTool({
  navigation,
  valuePost,
  deleteMediaPost,
  requestUpdatePost,
  hasUpdate,
  requestDeletePost,
}) {
  const [press, setPress] = useState(0);
  const [show, setShow] = useState(true);
  const [content, setContent] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [avtSource, setAvtSource] = useState([]);
  const [idAvatart, setIdAvatar] = useState([]);
  const [avt, setAvt] = useState(' ');
  const [name, setName] = useState('');

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
    };
  }, []);

  useEffect(() => {
    if (hasUpdate) {
      console.log('hasUpdate: ', hasUpdate);
      // navigation.navigate('Home');
    }
  }, [hasUpdate]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onGoBack);

    return () => BackHandler.removeEventListener('hardwareBackPress', onGoBack);
  }, []);

  const _keyboardDidShow = () => {
    setShow(false);
  };

  const onGoBack = () => {
    if (show) {
      setShow(false);
    } else if (content.length > 0 || avtSource.length > 0) {
      Keyboard.dismiss();
      setModalVisible(true);
    } else {
      navigation.goBack();
      requestDeletePost(valuePost.id);
    }
    return true;
  };

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

  const pickImage = async () => {
    if (avtSource.length < 4) {
      ImagePicker.showImagePicker(options, async (response) => {
        // console.log('response Choose Image: ', Object.keys(response));
        if (response.didCancel) {
          // console.log('User cancelled image picker');
        } else if (response.error) {
          // console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          // console.log('User tapped custom button: ', response.customButton);
        } else {
          let photo = {
            uri: response.uri,
            name: response.fileName,
            type: response.type,
          };

          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          // // console.log(source);
          let newAvtSource = avtSource.concat([photo.uri]);
          setAvtSource(newAvtSource);
          let formdata = new FormData();
          const userId = (valuePost && valuePost.userId) || 0;
          const postId = (valuePost && valuePost.id) || 0;
          formdata.append('myFiles', photo);
          formdata.append('userId', userId);
          formdata.append('postId', postId);
          await mediaServices
            .uploadImage(formdata)
            // fetch(ENV.apiUrlBackend + '/api/upload/uploadfile', {
            //   method: 'post',
            //   headers: {
            //     'Content-Type': 'multipart/form-data',
            //   },
            //   body: formdata,
            // })
            .then((response) => {
              // console.log('response: ', response);
              const idAvt = [...idAvatart, response.id];
              setIdAvatar(idAvt);

              // console.log('image uploaded', idAvt);
            })
            .catch((err) => {
              // console.log(err);
            });
        }
      });
    } else {
      alert('Chỉ được chọn tối đa 4 ảnh!');
    }
  };

  const removeImage = (id) => {
    let newAvtSource = avtSource.filter((value, index) => index != id);
    const idAvt = idAvatart[id] || 0;
    if (idAvt) {
      let newIdAvt = idAvatart.filter((value, index) => index != id);
      deleteMediaPost(idAvt);
      setIdAvatar(newIdAvt);
      setAvtSource(newAvtSource);
    }
  };

  const updatePost = () => {
    // console.log('valuePost: ', valuePost);
    const param = {
      id: valuePost.id,
      content: content || '',
    };
    // console.log("param: ", param);
    requestUpdatePost(param);
  };
  const Remove = ({id}) => {
    return (
      <En
        name="cross"
        color={Colors.WHITE}
        size={24}
        style={styles.cancelButton}
        onPress={() => removeImage(id)}
      />
    );
  };

  const getData = async () => {
    try {
      const avt = await AsyncStorage.getItem('avatar');
      const name = await AsyncStorage.getItem('name');
      if (avt !== null && name !== null) {
        setAvt(avt);
        setName(name);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={[
            styles.backIcon,
            {backgroundColor: press == 1 ? Colors.LIGHTGRAY : Colors.WHITE},
          ]}
          onPress={() => onGoBack()}
          onTouchStart={() => setPress(1)}
          onTouchEnd={() => setPress(0)}>
          <Ant name="arrowleft" size={24} />
        </Pressable>
        <Text style={styles.title}>Tạo bài viết</Text>
        <Pressable
          disabled={content.length == 0 && avtSource.length == 0}
          style={[
            styles.postContainer,
            {backgroundColor: press == 4 ? Colors.LIGHTGRAY : Colors.WHITE},
          ]}
          onTouchStart={() => {
            if (content.length > 0 || avtSource.length > 0) setPress(4);
          }}
          onTouchEnd={() => setPress(0)}
          onPress={updatePost}>
          <Text
            style={{
              color:
                content.length > 0 || avtSource.length > 0
                  ? Colors.BLUE
                  : Colors.GAINSBORO,
            }}>
            ĐĂNG
          </Text>
        </Pressable>
      </View>
      <View style={styles.headContainer}>
        <Image source={{uri: avt}} style={styles.avt} />
        <View style={styles.headTitleContainer}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.public}>
            <Oct name="globe" color={Colors.GRAY} size={16} />
            <Text style={styles.publicText}>Công khai</Text>
          </View>
        </View>
      </View>
      <TextInput
        placeholder={
          avtSource.length > 0
            ? 'Hãy nói gì đó về các bức ảnh này...'
            : 'Bạn đang nghĩ gì?'
        }
        placeholderTextColor={Colors.GRAY}
        style={
          avtSource.length > 0
            ? {fontSize: 15, paddingLeft: 15}
            : {fontSize: 25, paddingLeft: 15}
        }
        onChangeText={(text) => setContent(text.trim())}
        multiline={true}
      />
      {avtSource.length > 0 ? (
        <View style={styles.imageContainer}>
          <View style={{width: '64.5%', height: '100%'}}>
            <Image
              source={{uri: avtSource[0]}}
              style={{width: '100%', height: '100%'}}
            />
            <Remove id={0} />
          </View>
          <View style={styles.smallImages}>
            {avtSource.map((value, index) =>
              index != 0 ? (
                <View style={{width: '100%', height: '33%'}} key={index}>
                  <Image
                    source={{uri: value}}
                    style={{width: '100%', height: '100%'}}
                  />
                  <Remove id={index} />
                </View>
              ) : null,
            )}
            {avtSource.length < 4 ? <AliasImage /> : null}
            {avtSource.length < 3 ? <AliasImage /> : null}
            {avtSource.length < 2 ? <AliasImage /> : null}
          </View>
        </View>
      ) : null}
      {show ? (
        <View style={styles.add}>
          <Pressable
            style={[
              styles.line,
              {backgroundColor: press == 2 ? Colors.GAINSBORO : Colors.WHITE},
            ]}
            onTouchStart={() => setPress(2)}
            onTouchEnd={() => setPress(0)}
            onPressOut={() => setPress(0)}
            onPress={() => pickImage()}>
            <Fontisto
              style={{marginRight: 15}}
              name="photograph"
              color={Colors.LIME}
              size={24}
            />
            <Text style={{fontSize: 16}}>Ảnh/Video</Text>
          </Pressable>
          <Pressable
            style={[
              styles.line,
              {backgroundColor: press == 3 ? Colors.GAINSBORO : Colors.WHITE},
            ]}
            onTouchStart={() => setPress(3)}
            onTouchEnd={() => setPress(0)}
            onPressOut={() => setPress(0)}>
            <Fontisto
              style={{marginRight: 15}}
              name="smiley"
              size={24}
              color={Colors.ORANGE}
            />
            <Text style={{fontSize: 16}}>Cảm xúc/Hoạt động</Text>
          </Pressable>
        </View>
      ) : (
        <Pressable
          style={styles.addContainer}
          onPress={() => {
            setShow(true);
            Keyboard.dismiss();
          }}>
          <Text style={{fontSize: 16}}>Thêm vào bài viết của bạn</Text>
          <View style={styles.iconGroup}>
            <Fontisto
              style={{marginRight: 5}}
              name="photograph"
              color={Colors.LIME}
              size={24}
            />
            <Fontisto name="smiley" size={24} color={Colors.ORANGE} />
          </View>
        </Pressable>
      )}
      <Modal
        isVisible={isModalVisible}
        backdropOpacity={0.35}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 15, marginBottom: 5}}>
            Bạn muốn hoàn thành bài viết của mình sau?
          </Text>
          <Text style={{color: Colors.DARKGRAY, fontSize: 13.5}}>
            Lưu làm bản nháp hoặc bạn có thể tiếp tục chỉnh sửa.
          </Text>
        </View>
        <Pressable
          style={[
            styles.saveContainer,
            {backgroundColor: press == 5 ? Colors.GAINSBORO : Colors.WHITE},
          ]}
          onTouchStart={() => setPress(5)}
          onTouchEnd={() => setPress(0)}
          onPressOut={() => setPress(0)}>
          <Ion
            name="bookmark-outline"
            size={28}
            color={Colors.DARKGRAY}
            style={{marginRight: 10}}
          />
          <View>
            <Text style={{fontSize: 15}}>Lưu làm bản nháp</Text>
            <Text style={{color: Colors.DARKGRAY, fontSize: 12}}>
              Bạn sẽ nhận được thông báo về bản nháp.
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[
            styles.saveContainer,
            {backgroundColor: press == 6 ? Colors.GAINSBORO : Colors.WHITE},
          ]}
          onTouchStart={() => setPress(6)}
          onTouchEnd={() => setPress(0)}
          onPressOut={() => setPress(0)}
          onPress={() => {
            requestDeletePost(valuePost.id);
            // setModalVisible(false);
            requestDeletePost(valuePost.id);
            navigation.goBack();
          }}>
          <Ion
            name="trash-outline"
            size={28}
            color={Colors.DARKGRAY}
            style={{marginRight: 10}}
          />
          <Text style={{fontSize: 15}}>Bỏ bài viết</Text>
        </Pressable>
        <Pressable
          style={[
            styles.saveContainer,
            {backgroundColor: press == 7 ? Colors.GAINSBORO : Colors.WHITE},
          ]}
          onTouchStart={() => setPress(7)}
          onTouchEnd={() => setPress(0)}
          onPressOut={() => setPress(0)}
          onPress={() => setModalVisible(false)}>
          <Ion
            name="checkmark"
            size={28}
            color={isModalVisible ? Colors.BLUE : Colors.DARKGRAY}
            style={{marginRight: 10}}
          />
          <Text style={{fontSize: 15, color: Colors.BLUE}}>
            Tiếp tục chỉnh sửa
          </Text>
        </Pressable>
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
  postContainer: {
    position: 'absolute',
    right: 5,
    height: 46,
    width: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 5,
  },
  avt: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  headTitleContainer: {
    marginLeft: 10,
  },
  public: {
    flexDirection: 'row',
    width: 100,
    height: 30,
    borderRadius: 5,
    borderColor: Colors.LIGHTGRAY,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
  },
  publicText: {
    fontWeight: 'bold',
    color: Colors.GRAY,
    fontSize: 12,
  },
  add: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  addContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 43,
    borderTopWidth: 0.5,
    borderTopColor: Colors.LIGHTGRAY,
    alignItems: 'center',
    padding: 10,
  },
  iconGroup: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
  },
  backIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  line: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderTopColor: Colors.LIGHTGRAY,
    borderTopWidth: 0.5,
    alignItems: 'center',
    padding: 15,
  },
  modal: {
    margin: 0,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Colors.WHITE,
  },
  saveContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    height: 70,
  },
  imageContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    justifyContent: 'space-between',
  },
  smallImages: {
    width: '35%',
    height: '100%',
    justifyContent: 'space-between',
  },
  cancelButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
});

const mapStateToProps = (state) => {
  // console.log("state: ", state);
  const post = (state.post && state.post.result) || {};
  // // console.log('state: ', state);
  let valuePost = null;
  let hasUpdate = false;
  if (post.success) {
    valuePost = post.result;
    if (valuePost.hasOwnProperty('content')) {
      hasUpdate = true;
    } else {
      hasUpdate = false;
    }
  } else {
  }
  return {valuePost, hasUpdate};
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMediaPost: (id) => {
      dispatch(requestDeleteMedia(id));
    },
    requestUpdatePost: (data) => {
      dispatch(requestUpdatePost(data));
    },
    requestDeletePost: (data) => {
      dispatch(requestDeletePost(data));
    },
  };
};

const NavigationConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FullPostTool);
export default NavigationConnected;
