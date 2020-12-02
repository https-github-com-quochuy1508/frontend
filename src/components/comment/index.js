import React, {useState} from 'react'
import { Text, StyleSheet, View,ScrollView, Image,TextInput,TouchableOpacity } from 'react-native'
import CommentPane from './CommentPane.js'
import Ant from 'react-native-vector-icons/AntDesign';
import * as Colors from '../../assets/Colors';

export default function Comment({likes, liked}) {
  const [isLike, setLike] = useState(liked);
  return (
    <View style={styles.container}>
      <View style={styles.headComment}> 
        <Image style={styles.emnotion} source={{uri:'https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/LH87Z6E9R6k.png'}}/>
        <Text style={{fontWeight: '700', fontSize: 16, marginRight: 'auto'}}>{likes}</Text>
        <Ant 
          name={isLike ? "like1" : "like2"} 
          size={24} 
          color={isLike ? Colors.BLUE : Colors.DARKGRAY}
          onPress={() => setLike(!isLike)}
        />
      </View>
      <ScrollView style={styles.listComment}>
          <TouchableOpacity>
            <Text style={styles.preCmt}>Xem các bình luận trước...</Text>
          </TouchableOpacity>
          <CommentPane
            cmt="Ngày 27/11/2020, Chính phủ vừa ban hành Nghị định 137/2020/NĐ-CP về quản lý, sử dụng pháo. Trong đó có thêm nhiều điểm mới về trường hợp sử dụng PHÁO, hành vi bị nghiêm cấm về PHÁO NỔ."
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Nguyen Xuan Hoat"
            time="1 giờ"
          />
          <CommentPane
            cmt="assdasdas"
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Nguyen Xuan Hoat Nguyen Xuan Hoat Nguyen Xuan Hoat Nguyen Xuan Hoat"
            time="1 giờ"
          />
          <CommentPane
            cmt="assdasdas"
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Nguyen Xuan"
            time="1 giờ"
          />
          <CommentPane
            cmt="assdasdas"
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Nguyen Xuan"
            time="1 giờ"
          />
          <CommentPane
            cmt="assdasdas"
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Nguyen Xuan"
            time="1 giờ"
          />
          <CommentPane
            cmt="assdasdas"
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Nguyen Xuan"
            time="1 giờ"
          />
          <CommentPane
            cmt="Ngày 27/11/2020, Chính phủ vừa ban hành Nghị định 137/2020/NĐ-CP về quản lý, sử dụng pháo. Trong đó có thêm nhiều điểm mới về trường hợp sử dụng PHÁO, hành vi bị nghiêm cấm về PHÁO NỔ."
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Nguyen Xuan Hoat"
            time="1 giờ"
          />
          <CommentPane
            cmt="Ngày 27/11/2020, Chính phủ vừa ban hành Nghị định 137/2020/NĐ-CP về quản lý, sử dụng pháo. Trong đó có thêm nhiều điểm mới về trường hợp sử dụng PHÁO, hành vi bị nghiêm cấm về PHÁO NỔ."
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Nguyen Xuan Hoat"
            time="1 giờ"
          />
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
    flex:1,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  headComment: {
    width: '100%',
    backgroundColor: Colors.WHITE, 
    height: 45,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomColor: Colors.LIGHTGRAY,
    borderBottomWidth: 0.5,
    flexDirection:'row',
  },
  emnotion: {
    width: 17,
    height: 17,
    marginRight: 5,
  },
  listComment:{
    paddingLeft:10,
  },
  preCmt:{
    fontWeight: "bold",
    marginVertical:15,
  },
  inputComment:{
    width:'100%',
    height: 52,
    borderTopColor: Colors.GAINSBORO,
    borderTopWidth:1,
    backgroundColor:Colors.WHITE,
    justifyContent:'center',
    alignItems:'center',
  },
  inputForm:{
    height:'78%',
    width:'94%',
    borderRadius:30,
    fontSize:16,
    backgroundColor: Colors.WHITESMOKE,
    paddingHorizontal: 10,
  },
})