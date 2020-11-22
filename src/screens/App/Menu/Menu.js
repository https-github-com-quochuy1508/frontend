import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableHighlight,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {logOut} from '../../../redux/actions/loginAction';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownItem from 'react-native-drop-down-item';

function Menu({logout}) {
  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('token');
    } catch (error) {
      // Error saving data
    }
  };

  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    // view menu start
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.menu}>
          <Text style={styles.menu_text}>Menu</Text>
          <TouchableOpacity style={styles.menu_button}>
            {/* <Image style={styles.avatar} source={require('./image/ava.png')} /> */}
            {/* <Icon name='search-outline' size={24} /> */}
            <Icon name="search-outline" size={22}></Icon>
          </TouchableOpacity>
        </View>

        <TouchableHighlight onPress={onPress} underlayColor="#ccc">
          <View style={styles.btnProfile}>
            <Image style={styles.avatar} source={require('./image/ava.png')} />
            <View style={styles.text}>
              <Text style={styles.name}>Xuân Hoạt</Text>
              <Text style={{color: '#727272'}}>Xem trang cá nhân của bạn</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor="#ccc">
          <View style={styles.btnOption}>
            <Image style={styles.icon} source={require('./image/group.png')} />
            <View style={styles.text}>
              <Text style={styles.name}>Nhóm</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor="#ccc">
          <View style={styles.btnOption}>
            <Image style={styles.icon} source={require('./image/friend.png')} />
            <View style={styles.text}>
              <Text style={styles.name}>Bạn bè</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor="#ccc">
          <View style={styles.btnOption}>
            <Image style={styles.icon} source={require('./image/kyniem.png')} />
            <View style={styles.text}>
              <Text style={styles.name}>Kỷ Niệm</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor="#ccc">
          <View style={styles.btnOption}>
            <Image style={styles.icon} source={require('./image/saved.png')} />
            <View style={styles.text}>
              <Text style={styles.name}>Đã Lưu </Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor="#ccc">
          <View style={styles.btnOption}>
            <Image style={styles.icon} source={require('./image/page.png')} />
            <View style={styles.text}>
              <Text style={styles.name}>Trang</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor="#ccc">
          <View style={styles.btnOption}>
            <Image style={styles.icon} source={require('./image/event.png')} />
            <View style={styles.text}>
              <Text style={styles.name}>Sự kiện</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor="#ccc">
          <View style={styles.btnOption}>
            <Image
              style={styles.icon}
              source={require('./image/videogame.png')}
            />
            <View style={styles.text}>
              <Text style={styles.name}>Chơi game </Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor="#ccc">
          <View style={styles.btnOption}>
            <Image style={styles.icon} source={require('./image/job.png')} />
            <View style={styles.text}>
              <Text style={styles.name}>Việc Làm</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor="#ccc">
          <View style={styles.btnOption}>
            <Image
              style={styles.icon}
              style={{width: 25, height: 25, marginLeft :6,marginRight:10,}}
              source={require('./image/question.png')}
            />
            <View style={styles.text}>
              <Text style={styles.name}>Trợ giúp và hỗ trợ </Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor="#ccc">
          <View style={styles.btnOption}>
            <Image
              style={styles.icon}
              style={{width: 25, height: 25, marginHorizontal :6,marginRight:10,}}
              source={require('./image/setting.png')}
            />
            <View style={styles.text}>
              <Text style={styles.name}>Cài đặt & quyền riêng tư</Text>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={onPress} underlayColor="#ccc">
          <View style={styles.btnOption}>
            <Image style={styles.icon} 
            style={{width: 25, height: 25, marginHorizontal :10}}
            source={require('./image/logout.png')} />
            <View style={styles.text}>
              <Text style={styles.name}>Đăng xuất</Text>
            </View>
          </View>
        </TouchableHighlight>
      </ScrollView>
    </View>

    // view menu end

    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Button title="Log out" onPress={() =>{removeToken();logout()}}></Button>
    // </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logOut());
    },
  };
};

const MenuContainer = connect(null, mapDispatchToProps)(Menu);

export default MenuContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 15,
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menu_text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 'auto',
  },
  menu_button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#e5e6eb',
  },
  btnProfile: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
    // paddingHorizontal:15,
    marginHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
  },
  text: {
    // flex:1,
  },
  btnOption: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 15,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginRight: 10,
    borderColor: '#333',
    borderWidth: 0.2,
  },
  icon: {
    height: 32,
    width: 32,
    marginLeft: 2,
    resizeMode: 'contain',
    marginRight: 8,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  drop_view: {
    paddingHorizontal: 3,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  drop_title: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  drop_name: {
    // flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
});
