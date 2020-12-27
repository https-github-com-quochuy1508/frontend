import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Button from '../../../components/MenuButton';
import * as Colors from '../../../assets/Colors';
import Friend from '../../../components/Messenger/Friend'
import ChatPane from '../../../components/Messenger/ChatPane'

function Messenger({navigation}) {
    const onPress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight
          style={styles.btn_ava}
          onPress={onPress}
          underlayColor={Colors.BLACK}>
          <Image
            style={styles.ava}
            source={require('../../../assets/images/avatar.png')}
          />
        </TouchableHighlight>
        <Text style={styles.chat}>Chat</Text>
        <TouchableHighlight
          style={styles.btn_camera}
          onPress={onPress}
          underlayColor={Colors.BLACK}>
          <Image
            style={styles.camera}
            source={require('../../../assets/images/camera.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.btn_pen}
          onPress={onPress}
          underlayColor={Colors.BLACK}>
          <Image
            style={styles.pencil}
            source={require('../../../assets/images/pencil.png')}
          />
        </TouchableHighlight>
      </View>
      <ScrollView style={styles.main}>
        <View style={styles.search}>
          <TextInput style={styles.inputForm} placeholder="Tìm kiếm  " />
        </View>
        <ScrollView
          style={styles.friendlist}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.meeting}>
            <Image
              style={styles.meeting_img}
              // style={styles.pencil}
              source={require('../../../assets/images/video.png')}
            />
            <Text style={styles.meeting_text}>Tạo phòng họp mặt</Text>
          </View>
          <Friend avt="https://i.stack.imgur.com/l60Hf.png" name="Hoat  Xuan" />
          <Friend
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
          />
          <Friend avt="https://i.stack.imgur.com/l60Hf.png" name="Hoat" />
          <Friend
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
          />
          <Friend
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
          />
          <Friend avt="https://i.stack.imgur.com/l60Hf.png" name="Hoat  Xuan" />
          <Friend
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
          />
          <Friend avt="https://i.stack.imgur.com/l60Hf.png" name="Hoat" />
          <Friend
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
          />
        </ScrollView>
        <View>
          <ChatPane
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
            mess="<3 Huy"
          />
          <ChatPane
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
            mess="<3 Thắng"
          />
          <ChatPane
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
            mess="<3 Quân"
          />
          <ChatPane
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
            mess="<3 Đức "
          />
          <ChatPane
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
            mess="<3 Huy"
          />
          <ChatPane
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
            mess="<3 Thắng"
          />
          <ChatPane
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
            mess="<3 Quân"
          />
          <ChatPane
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
            mess="<3 Đức "
          />
          <ChatPane
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
            mess="<3 Huy"
          />
          <ChatPane
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
            mess="<3 Thắng"
          />
          <ChatPane
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
            mess="<3 Quân"
          />
          <ChatPane
            avt="https://i.stack.imgur.com/l60Hf.png"
            name="Hoat Nguyen"
            mess="<3 Đức "
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableHighlight
          style={styles.btn_footer}
          onPress={onPress}
          underlayColor={Colors.WHITESMOKE}>
            <View
            style={{alignItems:'center',}}
            >
          <Image
            style={styles.img_footer}
            source={require('../../../assets/images/chat.png')}
          />
          <Text style={styles.btn_text}>Chat</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.btn_footer}
          onPress={onPress}
          underlayColor={Colors.WHITESMOKE}>
            <View
            style={{alignItems:'center',}}
            >
          <Image
            style={styles.img_footer}
            source={require('../../../assets/images/friends.png')}
          />
          <Text  style={styles.btn_text}
            style={{color:'#aaa'}}
          >Danh bạ</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
export default Messenger;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  header:{
    height: 60,
    // backgroundColor:'#ccc',
    position:'absolute',
    left:0,
    top:0,
    right:0,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10,
    borderBottomColor:"#eee",
    borderBottomWidth:1,
  },
  footer:{
    height: 60,
    // backgroundColor:'#ccc',
    position:'absolute',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    left:0,
    bottom:0,
    right:0,
    borderTopColor:'#fafafa',
    borderTopWidth:2,
},
main:{
    flex:1,
    // height:300,
    marginVertical:60,
    // paddingVertical:10,
    // paddingHorizontal:10,
},
ava:{
    borderRadius:36,
    width:36,
    height:36,
    marginVertical:'auto',
},
chat:{
    fontSize:24,
    fontWeight:"700",
    marginLeft:10,
},
btn_camera:{
    marginLeft:'auto',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    backgroundColor:Colors.WHITESMOKE,
    padding:8,
    height:36,
},
btn_pen:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
    borderRadius:50,
    backgroundColor:Colors.WHITESMOKE,
    padding:8,
    height:36,
},
camera:{
    width:20,
    height:20,
},  
pencil:{
    width:20,
    height:20,
}, 
btn_footer:{
    flex:1,
    height:'100%',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
},
search: {
    width: '100%',
    height: 52,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:2,
  },
  inputForm: {
    height: '78%',
    width: '94%',
    borderRadius: 30,
    fontSize: 16,
    backgroundColor: Colors.WHITESMOKE,
    paddingHorizontal: 10,
  },
  friendlist:{
    // height:100,
    // alignItems:'center',
    // backgroundColor:'#eee',
    marginBottom:10,
  },
  meeting:{
      width:66,
      marginRight:15,
    //   backgroundColor:'#eee',
      alignItems:'center',
      marginLeft:5,
  },
  meeting_img:{
    width:55,
    height:55,
    marginTop:6,
    marginBottom:8,
    // marginLeft:5,
  },
  meeting_text:{
    textAlign:'center',
    fontSize:13,
  },
  btn_text:{
    // textAlign:'center',
    // alignItems:'center',
  },
  img_footer:{
    width:25,
    height:25,
  },  
});
