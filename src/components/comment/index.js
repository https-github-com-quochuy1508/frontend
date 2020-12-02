import React, {useState} from 'react'
import { Text, StyleSheet, View,ScrollView, Image,TextInput,Dimensions, Pressable,TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import CommentPane from './CommentPane.js'
export default function Comment({num, liked}) {
// num là số lượng like , liked là  nếu like rồi thì cái biểu tượng like sẽ màu xanh, nếu chưa thì màu trắng 
// headComment là phần chứa số lượng like, biểu tượng đã like/ chưa like ở góc 1 giờ 
// listComment chứa đống CommentPane
// inputComment là cái ô viết bình luận
    return (
      <View style={styles.container}>
        <View style={styles.headComment}> 
          <Image
            style={styles.emnotion}
            source={{
              uri:
                'https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/LH87Z6E9R6k.png',
            }}
          />
          <Text style={{fontWeight: '700', fontSize: 16, marginRight: 'auto'}}>
            {num}
          </Text>
          <Image
            style={styles.emnotion}
            source={
              liked
                ? require('./images/like-blue.png')
                : require('./images/like.png')
            }
          />
        </View>
        <View style={styles.listComment}>
          <ScrollView>
            <TouchableOpacity>
              <Text style={styles.preCmt}>Xem các bình luận trước...</Text>
            </TouchableOpacity>
            {/* //  t chưa biết cái tạo 1 mảng data xong chạy vòng for để show ra  nên t viết hết ra thế này  */}
            <CommentPane
              cmt="Ngày 27/11/2020, Chính phủ vừa ban hành Nghị định 137/2020/NĐ-CP về quản lý, sử dụng pháo. Trong đó có thêm nhiều điểm mới về trường hợp sử dụng PHÁO, hành vi bị nghiêm cấm về PHÁO NỔ."
              ava="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/LH87Z6E9R6k.png"
              name="Nguyen Xuan Hoat"
              time="1 giờ"
            />
            <CommentPane
              cmt="assdasdas"
              ava="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/LH87Z6E9R6k.png"
              name="Nguyen Xuan Hoat Nguyen Xuan Hoat Nguyen Xuan Hoat Nguyen Xuan Hoat"
              time="1 giờ"
            />
            <CommentPane
              cmt="assdasdas"
              ava="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/LH87Z6E9R6k.png"
              name="Nguyen Xuan Hoat"
              time="1 giờ"
            />
            <CommentPane
              cmt="assdasdas"
              ava="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/LH87Z6E9R6k.png"
              name="Nguyen Xuan Hoat"
              time="1 giờ"
            />
            <CommentPane
              cmt="assdasdas"
              ava="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/LH87Z6E9R6k.png"
              name="Nguyen Xuan Hoat"
              time="1 giờ"
            />
            <CommentPane
              cmt="assdasdas"
              ava="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/LH87Z6E9R6k.png"
              name="Nguyen Xuan Hoat"
              time="1 giờ"
            />
            <CommentPane
              cmt="assdasdas"
              ava="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/LH87Z6E9R6k.png"
              name="Nguyen Xuan Hoat"
              time="1 giờ"
            />
            <CommentPane
              cmt="assdasdas"
              ava="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/LH87Z6E9R6k.png"
              name="Nguyen Xuan Hoat"
              time="1 giờ"
            />
            <CommentPane
              cmt="assdasdas"
              ava="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/LH87Z6E9R6k.png"
              name="Nguyen Xuan Hoat"
              time="1 giờ"
            />
            <CommentPane
              cmt="assdasdas"
              ava="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/LH87Z6E9R6k.png"
              name="Nguyen Xuan Hoat"
              time="1 giờ"
            />
            <CommentPane
              cmt="assdasdas"
              ava="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/LH87Z6E9R6k.png"
              name="Nguyen Xuan Hoat"
              time="1 giờ"
            />
            <CommentPane
              cmt="assdasdas"
              ava="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/LH87Z6E9R6k.png"
              name="Nguyen Xuan Hoat"
              time="2 giờ"
            />
          </ScrollView>
        </View>
        <View style={styles.inputComment}>
          {/* <Text>aaaaaaaaaaaaaaa</Text> */}
          <TextInput
            style={styles.inputForm}
            placeholder="  Viết bình luận... "
          />
        </View>
      </View>
    );
}  


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        
      },
      headComment: {
        width: '100%',
        backgroundColor: '#FFF', 
        height: 45,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomColor:'#ddd',
        borderBottomWidth: 1,
        // borderTopLeftRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        flexDirection:'row',
    },
    emnotion: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    listComment:{
        paddingLeft:10,
        // height:'auto',
        height:Dimensions.get("window").height-97,
        // paddingBottom:100,
    },
    preCmt:{
        fontWeight:"700",
        marginVertical:15,
    },
    inputComment:{
      width:'100%',
      // height:'6%',
      height: 52,
      borderTopColor:'#eee',
      borderTopWidth:1,
      // borderBottomColor:'#eee',
      // borderBottomWidth:1,
      backgroundColor:'#fff',
      // alignItems:'center',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
    },
    inputForm:{
      height:'78%',
      width:'94%',
      borderRadius:30,
      // height:30,
      fontSize:16,
      backgroundColor:'#f1f2f6',
    },
})