import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, Pressable, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as Colors from '../../assets/Colors';
import {navigation} from '../../../rootNavigation';
import userServices from '../../redux/services/userServices';
import {requestCreatePost} from '../../redux/actions/postAction';
import AsyncStorage from '@react-native-community/async-storage';

function PostTool({createPost}) {
  const [press, setPress] = useState(false);
  const [avt, setAvt] = useState(" ");

  const onFullPostToolPressHandler = async (data) => {
    const fakeData = {
      userId: (await userServices.getUserId()) || 0,
    };
    createPost(fakeData);
    navigation.navigate('FullPostTool');
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('avatar')
      if(value !== null) {
        setAvt(value);
      }
    } catch(e) {
      // error reading value
    }
  }

  useEffect(() => {
    getData();
  })
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("YourWall")}>
        <Image source={{uri: avt}} style={styles.userAvatar}/>
      </TouchableOpacity>
      <Pressable
        onPress={() => onFullPostToolPressHandler()}
        style={[
          styles.postInputWrapper,
          {backgroundColor: press ? Colors.GAINSBORO : Colors.WHITE},
        ]}
        onTouchStart={() => setPress(true)}
        onTouchEnd={() => setPress(false)}
        onPressOut={() => setPress(false)}>
        <Text style={{fontSize: 16}}>Bạn đang nghĩ gì?</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: Colors.LIGHTGRAY,
    borderTopWidth: 0.5,
    borderBottomColor: Colors.LIGHTGRAY,
    borderBottomWidth: 0.5,
    backgroundColor: Colors.WHITE,
    padding: 10,
    flexDirection: 'row',
  },
  postInputWrapper: {
    borderRadius: 48,
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    borderRadius: 20,
    height: 40,
    width: '100%',
    borderColor: Colors.LIGHTGRAY,
    paddingHorizontal: 20,
    borderWidth: 1,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (params) => {
      dispatch(requestCreatePost(params));
    },
  };
};

const PostToolConnected = connect(
  null,
  mapDispatchToProps,
)(PostTool);

export default PostToolConnected;
