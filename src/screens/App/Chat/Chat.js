import React, { useState, useCallback, useEffect } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Pressable } from "react-native";
import Fea from 'react-native-vector-icons/Feather';
import Ent from 'react-native-vector-icons/Entypo';
import Sim from 'react-native-vector-icons/SimpleLineIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import Fon from 'react-native-vector-icons/Fontisto';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Mat from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import * as Colors from '../../../assets/Colors';
import { GiftedChat } from 'react-native-gifted-chat'

export default function Edit() {
    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
        sent: true,
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.WHITE,
    },

});
