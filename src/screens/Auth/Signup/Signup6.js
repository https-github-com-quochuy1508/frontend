import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
    title: {
        paddingTop: 120,
        paddingBottom: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#000000',
    },

    text: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 17,
        color: '#000000',
        textAlign: 'center',
    },

    sub: {
        textAlign: "center",
        fontSize: 16,
        color: '#2176E1',
    },

    textInput: {
        fontSize: 20,
        paddingLeft: 24,
        borderBottomWidth: 2,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomColor: '#2176E1',
        marginBottom: 70,
    },

    button: {
        padding: 20,
    },

    bottom: {
        position: "absolute",
        bottom: 0,
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
        color: '#000000',
        textAlign: 'center',
    }
});

function Signup({ navigation }) {

    return (
        <View style={{ flex: 1, }}>
            <Text style={styles.title}> Hoàn tất đăng ký </Text>
            <Text style={styles.text}>Bằng cách nhấn vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và chọn không nhận bất cứ lúc nào. Thông tin từ danh bạ của bạn sẽ được tải lên Facebook liên tục để chúng tôi có thể gợi ý bạn bè, cung cấp và cải thiện quảng cáo cho bạn và người khác, cũng như mang đến dịch vụ tốt hơn.
            </Text>
            <View style={styles.button}>
                <Button
                    title='Đăng ký'
                    color='#2176E1'
                // onPress={() => navigation.navigate('Signup6')}
                />
            </View>
            <Text style={styles.sub}>Đăng ký mà không tải danh bạ của tôi lên</Text>
            <Text style={styles.bottom}>Thông tin liên hệ trong danh bạ của bạn, bao gồm tên, số điện thoại và biệt danh, sẽ được gửi tới Facebook để chúng tôi có thể gợi ý bạn bè, cung cấp và cải thiện quảng cáo cho bạn và người khác, cũng như mang đến dịch vụ tốt hơn. Bạn có thể tắt tính năng này trong phần Cài đặt, quản lý hoặc xóa bỏ thông tin liên hệ mình đã chia sẻ với Facebook. Tìm hiểu thêm
            </Text>
        </View>
    );
}


export default Signup;