import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import userServices from '../../redux/services/userServices';

import Ant from 'react-native-vector-icons/AntDesign';
import * as Colors from '../../assets/Colors';

import CommentPane from './CommentPane.js';
import {requestCreateComment} from '../../redux/actions/commentAction';

function Comment({postId, countLike, liked, listComment, requestCreateComment}) {
  const [isLike, setLike] = useState(liked);
  const [isEmpty, setIsEmpty] = useState(true);
  const [commentContent, setCommentContent] = useState("");
  const [userId, setUserId] = useState(0);
  const [comments, setComments] = useState([]);

  // console.log("11111111111111111111111111 ", listComment);

  useEffect(() => {
    if (listComment && listComment.length) {
      //console.log('listPosts.result.result.list: ', listPosts.result.list);
      let tmp = listComment;
      setComments(tmp)
    }
  }, [listComment]);

  const onChangeTextSearch = (content) => { 
    console.log('content: ', content);
    setCommentContent(content);
    if (content.length) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }

  const getData = async () => {
    try {
      const uuid = await AsyncStorage.getItem('userId');
      if (uuid) {
        setUserId(uuid);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    // console.log('HELLO ----------------');
    getData();
  }, []);

  const onCreateComment = async () => {
    const data = {
      userId: userId,
      content: commentContent,
      postId: postId,
    };
    await requestCreateComment(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headComment}>
        <Image
          style={styles.emnotion}
          source={{
            uri: 'https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/LH87Z6E9R6k.png',
          }}
        />
        <Text style={{fontWeight: '700', fontSize: 16, marginRight: 'auto'}}>
          {countLike}
        </Text>
        <Ant
          name={isLike ? 'like1' : 'like2'}
          size={24}
          color={isLike ? Colors.BLUE : Colors.DARKGRAY}
          onPress={() => setLike(!isLike)}
        />
      </View>
      <ScrollView style={styles.listComment}>
        {/* <TouchableOpacity>
            <Text style={styles.preCmt}>Xem các bình luận trước...</Text>
          </TouchableOpacity> */}
        {comments &&
          Array.isArray(comments) &&
          comments.map((comment) => {
            if (comment.content && comment.users) {
              const {avatar, name} = comment.users;
              // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@");
              return (
                <CommentPane
                  key={comment.id}
                  postId={postId}
                  cmt={comment.content}
                  avt={avatar ? avatar : 'https://i.stack.imgur.com/l60Hf.png'}
                  name={name}
                  time="1 giờ"
                />
              );
            } else {
              return null;
            }
          })}
      </ScrollView>
      <View style={styles.inputComment}>
        <TextInput
          style={styles.inputForm}
          placeholder="Viết bình luận... "
          multiline={true}
          autoFocus={true}
          onChangeText={(content) => onChangeTextSearch(content)}
        />
      </View>
      <Pressable
        style={[
          {width: 0, height: 0},
          !isEmpty && {width: 25, height: 25, position: 'absolute', right: 0, bottom: 13},
        ]}
        onPress={() => onCreateComment()}>
        <Image
          style={styles.send}
          source={require('../../assets/images/send.png')}
          style={[
            {width: 0, height: 0},
            !isEmpty && {width: 25, height: 25, right: 19},
          ]}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headComment: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    height: 45,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomColor: Colors.LIGHTGRAY,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
  },
  emnotion: {
    width: 17,
    height: 17,
    marginRight: 5,
  },
  listComment: {
    paddingLeft: 10,
  },
  preCmt: {
    fontWeight: 'bold',
    marginVertical: 15,
  },
  inputComment: {
    width: '100%',
    height: 52,
    borderTopColor: Colors.GAINSBORO,
    borderTopWidth: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputForm: {
    height: '78%',
    width: '94%',
    borderRadius: 30,
    fontSize: 16,
    backgroundColor: Colors.WHITESMOKE,
    paddingHorizontal: 10,
  },
  send:{
    position:'absolute',
    right:18,
    height:25,
    width:25,
  },
});

const mapStateToProps = (state) => {
  let listComment;
  if (state.comments) {
    listComment = state.comments.result;
  }
  return {
    listComment
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestCreateComment: (params) => {
      dispatch(requestCreateComment(params));
    },
  };
};

const CommentConnected = connect(mapStateToProps, mapDispatchToProps)(Comment);

export default CommentConnected;