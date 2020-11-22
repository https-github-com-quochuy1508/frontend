import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {logOut} from '../../../redux/actions/loginAction';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/MenuButton';
import * as Colors from '../../../assets/Colors';

function Menu({logout, users}) {

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('token');
    } catch (error) {
      // Error saving data
    }
  };

  const onPress = () => {};

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.menu}>
          <Text style={styles.menu_text}>Menu</Text>
          <TouchableOpacity style={styles.menu_button}>
            <Icon name="search-outline" size={22}/>
          </TouchableOpacity>
        </View>
        <TouchableHighlight onPress={onPress} underlayColor={Colors.WHITESMOKE}>
          <View style={styles.btnProfile}>
            <Image style={styles.avatar} source={{uri: users.result!= null ? users.result.avatar : null}} />
            <View style={styles.text}>
              <Text style={styles.name}>{users.result != null ? users.result.name : null}</Text>
              <Text style={{color: Colors.DARKGRAY}}>Xem trang cá nhân của bạn</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor={Colors.WHITESMOKE}>
          <Button name="group"/>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor={Colors.WHITESMOKE}>
          <Button name="friend"/>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor={Colors.WHITESMOKE}>
          <Button name="memory"/>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor={Colors.WHITESMOKE}>
          <Button name="saved"/>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor={Colors.WHITESMOKE}>
          <Button name="page"/>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor={Colors.WHITESMOKE}>
          <Button name="event"/>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor={Colors.WHITESMOKE}>
          <Button name="game"/>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor={Colors.WHITESMOKE}>
          <Button name="job"/>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor={Colors.WHITESMOKE}>
          <Button name="help"/>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor={Colors.WHITESMOKE}>
          <Button name="setting"/>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {removeToken();logout()}} underlayColor={Colors.WHITESMOKE}>
          <Button name="logout"/>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logOut());
    },
  };
};

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  menu: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  menu_text: {
    fontSize: 25,
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
    backgroundColor: Colors.GAINSBORO,
  },
  btnProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
    marginHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: Colors.WHITESMOKE,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
