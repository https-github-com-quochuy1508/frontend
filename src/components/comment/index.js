import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CommentPane from './CommentPane.js';
import Ant from 'react-native-vector-icons/AntDesign';
import * as Colors from '../../assets/Colors';

export default function Comment({countLike, liked, comments}) {
  const [isLike, setLike] = useState(liked);
  // console.log('comments: ', comments);
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
              return (
                <CommentPane
                  key={comment.id}
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
        />
      </View>
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
});
