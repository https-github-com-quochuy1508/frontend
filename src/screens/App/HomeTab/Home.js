import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, ScrollView} from 'react-native';
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
      setPosts((listPosts.result && listPosts.result.list) || []);
    }
  }, [listPosts]);

  return (
    <ScrollView style={styles.container}>
      <PostTool />
      <StatusBar barStyle="dark-content" />
      {posts.map((post) => (
        <Post
          key={post.id}
          userInfo={post.users}
          time="Vừa xong"
          content={post.content || ''}
          medias={post.media}
          liked={false}
          likes={0}
          comments={15}
        />
      ))}
    </ScrollView>
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
