import React from 'react';
import { View,  TouchableOpacity,Button,Text,} from "react-native";
import SearchForm from '../../../components/search/SearchForm';

export default function Notifications({navigation}) {
  return (
    <View>
        <TouchableOpacity >
          <Button title="Press To Search" 
          onPress={() => navigation.navigate("SearchForm")} activeOpacity={0.8}
          >
          </Button>
          </TouchableOpacity>
    </View>
  );
}