import React,{ useState } from 'react';
import { View, Text,Modal, ScrollView, Image, StyleSheet, TouchableHighlight, Animated } from "react-native";
import Comment from "../../../components/comment";


export default function Notifications() {
// trả về 1 comment ở bên trong 1 modal 
// 1 tab comment bao gồm các commentPane nhỏ bên trong, truyền vào ava, name, cmt, time.


const [modalVisible, setModalVisible] = useState(false);
  return (

    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <View style={styles.container}>
              <Comment num={'1356'} liked={true} />
            </View>

          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Show Comment</Text>
      </TouchableHighlight>
      <Text>
        T không biết cái vuốt xuống để ẩn cmt, với cả cái khi keyboard pops up thì nó tự respond,
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    borderRadius: 10,
  },
  modalView: {
    borderColor: '#ccc',
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  container: {
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});