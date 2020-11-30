import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, ScrollView} from 'react-native';
import PostTool from '../../../components/PostTool';
import Post from '../../../components/Post';
import {requestGetPosts} from '../../../redux/actions/postAction';
import {connect} from 'react-redux';

function Home({requestGetPosts, listPosts}) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // console.log('HELLO WORLD');
    requestGetPosts({});
  }, []);

  useEffect(() => {
    if (listPosts.success) {
      console.log('listPosts.result.result.list: ', listPosts.result.list);
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
          userPostId={post.userId}
          avt="https://i.stack.imgur.com/l60Hf.png"
          name="Quân Nguyễn"
          time="Vừa xong"
          content={post.content || ''}
          medias={[
            'https://sites.google.com/site/thietkewebtaihanoi/_/rsrc/1480308136221/kien-thuc-web/tim-kiem-hinh-anh-dep-cho-giao-dien-website/T%C3%ACm%20ki%E1%BA%BFm%20h%C3%ACnh%20%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20cho%20giao%20di%E1%BB%87n%20website-1.jpg',
          ]}
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
  const listPosts = state.post.result;
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
