import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default function Button({name}) {
    let title, image;
    switch (name) {
        case 'group':
            title = "Nhóm";
            image = require('../assets/images/group.png');
            break;
        case 'friend':
            title = "Bạn bè";
            image = require('../assets/images/friend.png');
            break;
        case 'memory':
            title = "Kỷ niệm";
            image = require('../assets/images/kyniem.png');
            break;
        case 'saved':
            title = "Đã lưu";
            image = require('../assets/images/saved.png');
            break;
        case 'page':
            title = "Trang";
            image = require('../assets/images/page.png');
            break;
        case 'event':
            title = "Sự kiện";
            image = require('../assets/images/event.png');
            break;
        case 'game':
            title = "Chơi game";
            image = require('../assets/images/videogame.png');
            break;
        case 'job':
            title = "Việc làm";
            image = require('../assets/images/job.png');
            break;
        case 'help':
            title = "Trợ giúp và hỗ trợ";
            image = require('../assets/images/question.png');
            break;
        case 'setting':
            title = "Cài đặt & quyền riêng tư";
            image = require('../assets/images/setting.png');
            break;
        case 'logout':
            title = "Đăng xuất";
            image = require('../assets/images/logout.png');
            break;
    }
    return(
        <View style={styles.btnOption}>
            <Image style={styles.icon} source={image} />
            <Text style={styles.name}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    btnOption: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      paddingHorizontal: 15,
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
  });
  