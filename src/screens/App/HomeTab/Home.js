import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View, FlatList} from 'react-native';
import PostTool from '../../../components/PostTool';
import Post from '../../../components/Post';
import {requestGetPosts} from '../../../redux/actions/postAction';
import {connect} from 'react-redux';

function Home({requestGetPosts, listPosts}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    requestGetPosts({});
  }, []);

  useEffect(() => {
    if (listPosts != null && listPosts.success) {
      //console.log('listPosts.result.result.list: ', listPosts.result.list);
      const tmp = [{id: 0}].concat((listPosts.result && listPosts.result.list) || []);
      setPosts(tmp);
    }
  }, [listPosts]);

  const renderItem = ({item}) => {
    if(item.id == 0) return <PostTool />;
    return(
    <Post
      userInfo={item.users}
      time="Vừa xong"
      content={item.content || ''}
      medias={item.media}
      liked={false}
      likes={0}
      comments={15}
    />
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9CCD1',
  },
});

const mapStateToProps = (state) => {  
  let listPosts;
  if(state.post != null) listPosts = state.post.result;
  return {
    listPosts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestGetPosts: (params) => {
      dispatch(requestGetPosts(params));
    },
  };
};

const HomeConnected = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeConnected;
