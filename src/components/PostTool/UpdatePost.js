import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, TextInput, Pressable, Keyboard, BackHandler, TouchableHighlight} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import En from 'react-native-vector-icons/Entypo';
import Oct from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as Colors from '../../assets/Colors';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';
import AliasImage from '../AliasImage';
import mediaServices from '../../redux/services/mediaServices';
import {requestDeleteMedia} from '../../redux/actions/mediaAction';
import {requestUpdatePost} from '../../redux/actions/postAction';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

function UpdatePostTool({navigation, route, valuePost, deleteMediaPost, requestUpdatePost}) {
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
    setContent(route.params.content);
    let images = [];
    route.params.medias.map((value) => {
      images.push(value.path)
    });
    setAvtSource(images);
  },[])


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
    }
    return true;
  };

  const options = {
    title: 'Ch???n ???nh',
    takePhotoButtonTitle: 'Ch???p ???nh',
    chooseFromLibraryButtonTitle: 'T???i ???nh l??n t??? th?? vi???n',
    cancelButtonTitle: 'Tho??t',
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
      alert('Ch??? ???????c ch???n t???i ??a 4 ???nh!');
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
      id: route.params.id,
      content: content || '',
    };
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
        <Text style={styles.title}>Ch???nh s???a b??i vi???t</Text>
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
            L??U
          </Text>
        </Pressable>
      </View>
      <View style={styles.headContainer}>
        <Image source={{uri: avt}} style={styles.avt} />
        <View style={styles.headTitleContainer}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.public}>
            <Oct name="globe" color={Colors.GRAY} size={16} />
            <Text style={styles.publicText}>C??ng khai</Text>
          </View>
        </View>
      </View>
      <TextInput
        placeholder={
          avtSource.length > 0
            ? 'H??y n??i g?? ???? v??? c??c b???c ???nh n??y...'
            : 'B???n ??ang ngh?? g???'
        }
        placeholderTextColor={Colors.GRAY}
        style={
          avtSource.length > 0
            ? {fontSize: 15, paddingLeft: 15}
            : {fontSize: 25, paddingLeft: 15}
        }
        onChangeText={(text) => setContent(text)}
        multiline={true}
        value={content}
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
            <Text style={{fontSize: 16}}>???nh/Video</Text>
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
            <Text style={{fontSize: 16}}>C???m x??c/Ho???t ?????ng</Text>
          </Pressable>
        </View>
      ) : (
        <Pressable
          style={styles.addContainer}
          onPress={() => {
            setShow(true);
            Keyboard.dismiss();
          }}>
          <Text style={{fontSize: 16}}>Th??m v??o b??i vi???t c???a b???n</Text>
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
        style={{alignItems: 'center'}}
        isVisible={isModalVisible}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        backdropOpacity={0.6}
        animationIn="zoomIn"
        animationOut="zoomOut"
    >
        <View style={styles.deleteContainer}>
          <Text style={{fontSize: 18, marginBottom: 20}}>B??? thay ?????i?</Text>
          <Text style={{fontSize: 15 ,color: Colors.DARKGRAY}}>N???u b??? b??y gi??? th?? b???n s??? m???t m???i thay ?????i tr??n b??i vi???t n??y</Text>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10}}>
            <TouchableHighlight 
                style={styles.deleteAction} 
                underlayColor={Colors.GRAY91}
                onPress={() => setModalVisible(false)}>
                <Text style={{color: Colors.BLACK}}>TI???P T???C CH???NH S???A</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.deleteAction} 
                underlayColor={Colors.GRAY91}
                onPress={() => {setModalVisible(false); navigation.goBack()}}>
                <Text style={{color: Colors.BLUE}}>B???</Text>
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
  const post = (state.post && state.post.result) || {};
  // console.log('state: ', state);
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
  };
};

const NavigationConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdatePostTool);
export default NavigationConnected;
