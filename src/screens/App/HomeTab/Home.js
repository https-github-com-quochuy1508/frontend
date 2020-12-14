import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View, FlatList} from 'react-native';
import PostTool from '../../../components/PostTool';
import Post from '../../../components/Post';
import {
  requestGetPosts,
  requestCountPost,
} from '../../../redux/actions/postAction';
import {connect} from 'react-redux';
import moment from 'moment';

function Home({
  requestGetPosts,
  listPosts,
  postChange,
  requestCountPost,
  countPost,
}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    requestGetPosts({});
    requestCountPost({});
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
    let valueCountOfPost = {
      liked: false,
      countLike: 0,
      countComment: 0,
    };
    if (countPost.hasOwnProperty(item.id)) {
      valueCountOfPost.liked = countPost[item.id].isLike ? true : false;
      valueCountOfPost.countLike = countPost[item.id].countLike
        ? countPost[item.id].countLike
        : 0;
      valueCountOfPost.countComment = countPost[item.id].countComment
        ? countPost[item.id].countComment
        : 0;
    }
    console.log(
      'valueCountOfPost: ' + item.id + ' - ' + JSON.stringify(valueCountOfPost),
    );
    if (item.id == 0) return <PostTool />;
    return (
      <Post
        liked={valueCountOfPost.liked}
        countLike={valueCountOfPost.countLike}
        countComment={valueCountOfPost.countComment}
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
  let countPost = {};
  if (state.posts != null) {
    listPosts = state.posts.result;
  }
  if (state.count) {
    countPost = state.count.result;
  }
  if (state.post) {
    postChange = state.post;
  }
  return {
    listPosts,
    postChange,
    countPost,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestGetPosts: (params) => {
      dispatch(requestGetPosts(params));
    },
    requestCountPost: (params) => {
      dispatch(requestCountPost(params));
    },
  };
};

const HomeConnected = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeConnected;
