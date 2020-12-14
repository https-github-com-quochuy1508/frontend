import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View, FlatList} from 'react-native';
import PostTool from '../../../components/PostTool';
import Post from '../../../components/Post';
import {requestGetPosts} from '../../../redux/actions/postAction';
import {connect} from 'react-redux';
import moment from 'moment';

function Home({requestGetPosts, listPosts, postChange}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    requestGetPosts({});
  }, []);

  useEffect(() => {
    if (postChange) {
      if (
        postChange.result.result &&
        postChange.result.result.hasOwnProperty('content')
      ) {
        console.log('postChange: ', postChange);
        requestGetPosts({});
      }
    }
  }, [postChange]);

  useEffect(() => {
    if (listPosts != null && listPosts.success) {
      //console.log('listPosts.result.result.list: ', listPosts.result.list);
      const tmp = [{id: 0}].concat(
        (listPosts.result && listPosts.result.list) || [],
      );
      setPosts(tmp);
    }
  }, [listPosts]);

  const renderItem = ({item}) => {
    const timeAgo = moment(item.createAt).fromNow();
    if (item.id == 0) return <PostTool />;
    return (
      <Post
        postId={item.id}
        userInfo={item.users}
        time={timeAgo}
        content={item.content || ''}
        medias={item.media}
        comments={item.comments}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
  let postChange;
  if (state.posts != null) {
    listPosts = state.posts.result;
  }
  if (state.post) {
    postChange = state.post;
  }
  return {
    listPosts,
    postChange,
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
