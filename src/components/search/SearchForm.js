import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import * as Colors from '../../assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchHistoryPane from './SearchHistoryPane';
import {connect} from 'react-redux';
import {requestSearchPost} from '../../redux/actions/searchAction';

function SearchForm({navigation, requestSearchPost, searchReturn}) {
  const [dataSearch, setDataSearch] = useState([]);
  const [load, setLoad] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const onPress = () => {};
  let timeout = null;

  /**
   * Handle load end
   */
  useEffect(() => {
    if (searchReturn) {
      setDataSearch(searchReturn);
      setLoad(false);
    }
  }, [searchReturn]);

  /**
   * Handle when change text in search input
   * @param {*} content
   */
  const onChangeTextSearch = (content) => {
    console.log('content: ', content.length);
    if (content.length) {
      setIsEmpty(false);
    } else {
      setLoad(false);
      setIsEmpty(true);
    }

    if (timeout && content.length) {
      clearTimeout(timeout);
    }
    const param = {
      filter: {
        content,
      },
    };
    setLoad(true);
    timeout = setTimeout(() => {
      requestSearchPost(param);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputSearch}>
        <TouchableHighlight
          style={styles.back_button}
          onPress={() => navigation.goBack()}
          underlayColor={'#ccc'}>
          <Icon name="arrow-back" size={25} />
        </TouchableHighlight>
        <TextInput
          style={styles.inputForm}
          placeholder="Tìm kiếm"
          autoFocus={true}
          onChangeText={(content) => onChangeTextSearch(content)}
        />
      </View>

      <ScrollView style={styles.listSearch}>
        <View style={styles.recent}>
          <Text style={{fontWeight: '700', fontSize: 15}}>Mới đây </Text>
          <TouchableHighlight
            style={styles.editButton}
            onPress={() => navigation.navigate('SearchDiary')}
            activeOpacity={0.8}
            underlayColor={'#ccc'}>
            <Text style={{color: '#666', fontSize: 15}}>CHỈNH SỬA</Text>
          </TouchableHighlight>
        </View>
        {load && !isEmpty ? (
          <ActivityIndicator size="small" color="#5e5e61" />
        ) : isEmpty ? (
          <View style={styles.history}>
            <SearchHistoryPane keyword="Hồ Quốc Huy" />
            <SearchHistoryPane keyword="Phạm đình thắng" />
            <SearchHistoryPane keyword="Nguyễn Xuân Hoạt" />
          </View>
        ) : (
          dataSearch.map((data) => (
            <SearchHistoryPane key={data.id} keyword={data.content} />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    //   height:100,
  },
  listSearch: {
    flex: 1,
  },
  inputForm: {
    height: '78%',
    width: '88%',
    borderRadius: 30,
    fontSize: 16,
    backgroundColor: Colors.WHITESMOKE,
    paddingHorizontal: 20,
  },
  inputSearch: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 52,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
  },
  back_button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    // backgroundColor: Colors.GAINSBORO,
  },
  recent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  editButton: {
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 3,
  },
  history: {
    // padding:10,
    // alignItems:'center',
  },
});

const mapStateToProps = (state) => {
  let searchReturn = null;
  if (state.search && state.search.result && state.search.result.result) {
    console.log('state: ', state.search.result.result.list);
    searchReturn =
      state.search.result &&
      state.search.result.result &&
      state.search.result.result.list;
  }
  return {searchReturn};
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSearchPost: (data) => {
      dispatch(requestSearchPost(data));
    },
  };
};

const SearchFormConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm);

export default SearchFormConnected;
