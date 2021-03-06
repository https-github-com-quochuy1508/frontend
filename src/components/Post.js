import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import * as Colors from '../assets/Colors';
import Modal from 'react-native-modal';
import Ion from 'react-native-vector-icons/Ionicons';
import Oct from 'react-native-vector-icons/Octicons';
import Ent from 'react-native-vector-icons/Entypo';
import Ant from 'react-native-vector-icons/AntDesign';
import Sim from 'react-native-vector-icons/SimpleLineIcons';
import Mat from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import Comment from './comment';
import ReportItem from './ReportItem';
import {typesReport, detailsReport, emptyDetail} from '../assets/TypeRepost';
import {ScrollView} from 'react-native-gesture-handler';
import {navigation} from '../../rootNavigation';
import {requestLikePost, requestUnlikePost} from '../redux/actions/likeAction';
import {
  requestCountPost,
  requestDeletePost,
  requestGetPosts,
} from '../redux/actions/postAction';
import {requestGetComments} from '../redux/actions/commentAction';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';

function Post({
  userInfo,
  time,
  content,
  medias,
  comments,
  postId,
  requestLikePost,
  requestUnlikePost,
  requestDeletePost,
  requestGetPosts,
  requestGetComments,
  liked,
  countLike,
  countComment,
}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [noti, setNoti] = useState(true);
  const [isLike, setLike] = useState(liked);
  const [uid, setUid] = useState(0);
  const [uAvt, setUavt] = useState('');
  const [height, setHeight] = useState(300);
  const [showReport, setShowReport] = useState(false);
  const [selectedType, setSelectedType] = useState(-1);
  const [selectedDetail, setSelectedDetail] = useState(-1);
  const [showBlock, setShowBlock] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [reportComplete, showReportComplete] = useState(false);
  const [reportedType, setReportedType] = useState(-1);
  const [reportedDetail, setReportedDetail] = useState(-1);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getData = async () => {
    try {
      const uuid = await AsyncStorage.getItem('userId');
      const uavt = await AsyncStorage.getItem('avatar');
      if (uuid !== null && uavt !== null) {
        setUid(uuid);
        setUavt(uavt);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    // console.log('HELLO');
    getData();
    calHeight();
  }, []);

  const calHeight = async () => {
    try {
      Image.getSize(medias[0].path, (width, height) => {
        let h = (Dimensions.get('window').width * height) / width;
        if (h > 500) h = 500;
        setHeight(h);
      });
    } catch (e) {}
  };

  const selectType = (id) => {
    if (selectedType != id) setSelectedType(id);
    else setSelectedType(-1);
    setSelectedDetail(-1);
  };

  const selectDetail = (id) => {
    if (selectedDetail != id) setSelectedDetail(id);
    else setSelectedDetail(-1);
  };

  const modalHide = () => {
    setReportedType(selectedType);
    setReportedDetail(selectedDetail);
    selectType(-1);
  };

  const updatePost = () => {
    toggleModal();
    navigation.navigate('UpdatePostTool', {
      id: postId,
      content: content,
      medias: medias,
    });
  };

  const likePost = () => {
    const data = {
      userId: uid,
      postId,
    };
    if (isLike) {
      setLike(false);
      requestUnlikePost(data);
    } else {
      requestLikePost(data);
      setLike(true);
    }
  };

  const goToWall = () => {
    if (userInfo.id == uid) navigation.navigate('Wall');
    else navigation.navigate('OtherWall', {userId: userInfo.id});
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.headWrap}>
        <TouchableOpacity onPress={() => goToWall()}>
          <FastImage
            style={styles.avatar}
            source={{
              uri:
                (userInfo && userInfo.avatar) ||
                'https://i.stack.imgur.com/l60Hf.png',
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
        <View style={styles.nameWrap}>
          <TouchableOpacity onPress={() => goToWall()}>
            <Text style={styles.name}>{userInfo && userInfo.name}</Text>
          </TouchableOpacity>
          <Text style={styles.time}>
            {time} <Text style={styles.dot}>???</Text>{' '}
            <Oct name="globe" color={Colors.DARKGRAY} size={13} />
          </Text>
        </View>
        <TouchableHighlight
          style={styles.dotButton}
          underlayColor={Colors.GAINSBORO}
          onPress={() => toggleModal()}>
          <Ent name="dots-three-horizontal" size={18} color={Colors.DARKGRAY} />
        </TouchableHighlight>
      </View>
      {content.length > 0 ? (
        <Text style={[styles.content, {fontSize: medias.length > 0 ? 16 : 24}]}>
          {content}
        </Text>
      ) : null}
      {medias.length == 1 ? (
        <FastImage
          style={{height: height}}
          source={{uri: medias[0].path}}
          resizeMode={FastImage.resizeMode.contain}
        />
      ) : null}
      {medias.length == 2 ? (
        <View>
          <FastImage
            style={{height: 250, width: '100%', marginBottom: 5}}
            source={{uri: medias[0].path}}
            resizeMode={FastImage.resizeMode.contain}
          />
          <FastImage
            style={{height: 250, width: '100%'}}
            source={{uri: medias[1].path}}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      ) : null}
      {medias.length == 3 ? (
        <View>
          <FastImage
            style={{height: 250, marginBottom: 5}}
            source={{uri: medias[0].path}}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <FastImage
              style={{height: 200, width: '49.4%'}}
              source={{uri: medias[1].path}}
              resizeMode={FastImage.resizeMode.contain}
            />
            <FastImage
              style={{height: 200, width: '49.4%'}}
              source={{uri: medias[2].path}}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        </View>
      ) : null}
      {medias.length == 4 ? (
        <View>
          <FastImage
            style={{height: 250, marginBottom: 5}}
            source={{uri: medias[0].path}}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <FastImage
              style={{height: 130, width: '32.6%'}}
              source={{uri: medias[1].path}}
              resizeMode={FastImage.resizeMode.contain}
            />
            <FastImage
              style={{height: 130, width: '32.6%'}}
              source={{uri: medias[2].path}}
              resizeMode={FastImage.resizeMode.contain}
            />
            <FastImage
              style={{height: 130, width: '32.6%'}}
              source={{uri: medias[3].path}}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        </View>
      ) : null}
      <View style={styles.likeComment}>
        {countLike > 0 || isLike ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FastImage
              style={styles.like}
              source={{
                uri:
                  'https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/LH87Z6E9R6k.png',
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.likeNum}>
              {isLike ? 'B???n v?? ' + countLike + ' ng?????i kh??c' : countLike}
            </Text>
          </View>
        ) : null}
        {countComment ? (
          <Text style={styles.likeNum}>{countComment + ' b??nh lu???n'}</Text>
        ) : null}
      </View>
      <View style={styles.buttonWrap}>
        <TouchableHighlight
          underlayColor={Colors.WHITESMOKE}
          onPress={likePost}
          style={{width: '50%', alignItems: 'center'}}>
          <View style={styles.button}>
            <Ant
              name={isLike ? 'like1' : 'like2'}
              size={24}
              color={isLike ? Colors.BLUE : Colors.DARKGRAY}
            />
            <Text
              style={[
                styles.likeText,
                {color: isLike ? Colors.BLUE : Colors.DARKGRAY},
              ]}>
              {' '}
              Th??ch
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={Colors.WHITESMOKE}
          onPress={() => {
            setShowComment(true);
            requestGetComments({filter: {postId: postId}});
          }}
          style={{width: '50%', alignItems: 'center'}}>
          <View style={styles.button}>
            <Ion
              name="chatbox-outline"
              size={24}
              style={{alignSelf: 'center', color: Colors.DARKGRAY}}
            />
            <Text style={styles.likeText}> B??nh lu???n</Text>
          </View>
        </TouchableHighlight>
      </View>

      <Modal
        isVisible={isModalVisible}
        backdropOpacity={0.6}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}>
        <View style={{padding: 0}}>
          {uid == userInfo.id ? (
            <View>
              <TouchableHighlight
                underlayColor={Colors.GAINSBORO}
                onPress={() => updatePost()}>
                <View style={styles.saveContainer}>
                  <Sim
                    name="pencil"
                    size={28}
                    color={Colors.BLACK}
                    style={{marginRight: 10}}
                  />
                  <Text style={{fontSize: 16}}>Ch???nh s???a b??i vi???t</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={Colors.GAINSBORO}
                onPress={() => {
                  setModalVisible(false);
                  setShowDelete(true);
                }}>
                <View style={styles.saveContainer}>
                  <Ion
                    name="trash-outline"
                    size={28}
                    color={Colors.BLACK}
                    style={{marginRight: 10}}
                  />
                  <Text style={{fontSize: 16}}>X??a</Text>
                </View>
              </TouchableHighlight>
            </View>
          ) : null}
          <TouchableHighlight
            underlayColor={Colors.GAINSBORO}
            onPress={() => {
              setModalVisible(false);
              setNoti(!noti);
            }}>
            <View style={styles.saveContainer}>
              <Ion
                name="notifications-outline"
                size={28}
                color={Colors.BLACK}
                style={{marginRight: 10}}
              />
              {noti == true ? (
                <Text style={{fontSize: 16}}>
                  T???t th??ng b??o v??? b??i vi???t n??y
                </Text>
              ) : (
                <Text style={{fontSize: 15}}>
                  B???t th??ng b??o v??? b??i vi???t n??y
                </Text>
              )}
            </View>
          </TouchableHighlight>
          {uid != userInfo.id ? (
            <TouchableHighlight
              underlayColor={Colors.GAINSBORO}
              onPress={() => {
                setModalVisible(false);
                setShowReport(true);
              }}>
              <View style={styles.saveContainer}>
                <Oct
                  name="report"
                  size={28}
                  color={Colors.BLACK}
                  style={{marginRight: 10}}
                />
                <View>
                  <Text style={{fontSize: 16}}>B??o c??o b??i vi???t</Text>
                  <Text style={{fontSize: 12}}>
                    T??i lo ng???i v??? b??i vi???t n??y.
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          ) : null}
        </View>
      </Modal>
      {/* <Modal
        style={[styles.modal, {height: '100%'}]}
        isVisible={showComment}
        onBackButtonPress={() => setShowComment(false)}
        onSwipeComplete={() => setShowComment(false)}
        swipeDirection="down">
        <Comment liked={isLike} likes={countLike} />
      </Modal> */}
      <Modal
        style={{margin: 0, backgroundColor: Colors.WHITE}}
        isVisible={showReport}
        onBackButtonPress={() => setShowReport(false)}
        onSwipeComplete={() => setShowReport(false)}
        swipeDirection="down"
        onModalHide={() => modalHide()}>
        <View style={{flex: 1}}>
          <View style={styles.reportHead}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>B??o c??o</Text>
            <TouchableHighlight
              style={styles.exitReport}
              underlayColor={Colors.WHITESMOKE}
              onPress={() => setShowReport(false)}>
              <Ent name="cross" color={Colors.DARKGRAY} size={30} />
            </TouchableHighlight>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.listReport}>
              <Mat name="chat-alert" size={28} color={Colors.ORANGE1} />
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                Vui l??ng ch???n v???n ????? ????? ti???p t???c
              </Text>
              <Text
                style={{
                  color: Colors.DARKGRAY,
                  marginBottom: 10,
                  fontSize: 15,
                }}>
                B???n c?? th??? b??o c??o b??i vi???t sau khi ch???n v???n ?????.
              </Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {typesReport.map((value, index) => (
                  <Pressable onPress={() => selectType(index)} key={value}>
                    <ReportItem type={value} active={selectedType == index} />
                  </Pressable>
                ))}
              </View>
              {selectedType >= 0 && !emptyDetail.includes(selectedType) ? (
                <View>
                  <Text style={{marginBottom: 15}}>
                    H??y gi??p ch??ng t??i hi???u v???n ?????.
                  </Text>
                  <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {detailsReport[selectedType].map((value, index) => (
                      <Pressable
                        onPress={() => selectDetail(index)}
                        key={value}>
                        <ReportItem
                          type={value}
                          active={selectedDetail == index}
                        />
                      </Pressable>
                    ))}
                  </View>
                </View>
              ) : null}
            </View>
            <View>
              <Text style={styles.actionTitle}>
                C??c b?????c kh??c m?? b???n c?? th??? th???c hi???n
              </Text>
              <TouchableHighlight
                underlayColor={Colors.GRAY91}
                onPress={() => setShowBlock(true)}>
                <View style={styles.action}>
                  <Ent name="block" size={24} style={{margin: 10}} />
                  <View>
                    <Text style={{fontSize: 16}}>
                      Ch???n {userInfo && userInfo.name.split(' ')[0]}
                    </Text>
                    <Text style={{color: Colors.DARKGRAY, width: '90%'}}>
                      C??c b???n s??? kh??ng th??? nh??n th???y ho???c li??n h??? v???i nhau.
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={Colors.GRAY91}
                onPress={() => setShowBlock(true)}>
                <View style={styles.action}>
                  <Ion
                    name="person-remove-outline"
                    size={24}
                    style={{margin: 10}}
                  />
                  <View>
                    <Text style={{fontSize: 16}}>
                      B??? theo d??i {userInfo && userInfo.name.split(' ')[0]}
                    </Text>
                    <Text style={{color: Colors.DARKGRAY}}>
                      D???ng xem b??i vi???t nh??ng v???n l?? b???n b??.
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
              <View style={styles.noti}>
                <Ion
                  name="information-circle"
                  color={Colors.LIGHTGRAY}
                  size={24}
                />
                <Text style={{color: Colors.DARKGRAY, margin: 10}}>
                  N???u b???n nh???n th???y ai ???? ??ang g???p nguy hi???m, ?????ng ch???n ch??? m??
                  h??y b??o ngay cho d???ch v??? c???p c???u t???i ?????a ph????ng.
                </Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.nextContainer}>
            <Pressable
              style={[
                styles.nextButton,
                {
                  backgroundColor:
                    selectedDetail != -1 || emptyDetail.includes(selectedType)
                      ? Colors.BLUE
                      : Colors.GRAY91,
                },
              ]}
              disabled={
                !(selectedDetail != -1 || emptyDetail.includes(selectedType))
              }
              onPress={() => {
                setShowReport(false);
                showReportComplete(true);
              }}>
              <Text
                style={[
                  styles.nextText,
                  {
                    color:
                      selectedDetail != -1 || emptyDetail.includes(selectedType)
                        ? Colors.WHITE
                        : Colors.GRAY,
                    opacity:
                      selectedDetail != -1 || emptyDetail.includes(selectedType)
                        ? 1
                        : 0.5,
                  },
                ]}>
                Ti???p
              </Text>
            </Pressable>
          </View>
        </View>
        <TouchableHighlight
          underlayColor={Colors.GAINSBORO}
          onPress={() => {
            setModalVisible(false);
            setShowDelete(true);
          }}>
          <View style={styles.saveContainer}>
            <Ion
              name="trash-outline"
              size={28}
              color={Colors.BLACK}
              style={{marginRight: 10}}
            />
            <Text style={{fontSize: 16}}>X??a</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={Colors.GAINSBORO}
          onPress={() => {
            setModalVisible(false);
            setNoti(!noti);
          }}>
          <View style={styles.saveContainer}>
            <Ion
              name="notifications-outline"
              size={28}
              color={Colors.BLACK}
              style={{marginRight: 10}}
            />
            {noti == true ? (
              <Text style={{fontSize: 16}}>T???t th??ng b??o v??? b??i vi???t n??y</Text>
            ) : (
              <Text style={{fontSize: 15}}>B???t th??ng b??o v??? b??i vi???t n??y</Text>
            )}
          </View>
        </TouchableHighlight>
        {uid == (userInfo && userInfo.id) ? (
          <TouchableHighlight
            underlayColor={Colors.GAINSBORO}
            onPress={() => {
              setModalVisible(false);
              setShowReport(true);
            }}>
            <View style={styles.saveContainer}>
              <Oct
                name="report"
                size={28}
                color={Colors.BLACK}
                style={{marginRight: 10}}
              />
              <View>
                <Text style={{fontSize: 16}}>B??o c??o b??i vi???t</Text>
                <Text style={{fontSize: 12}}>T??i lo ng???i v??? b??i vi???t n??y.</Text>
              </View>
            </View>
          </TouchableHighlight>
        ) : null}
      </Modal>
      <Modal
        style={[styles.modal, {height: '100%'}]}
        isVisible={showComment}
        onBackButtonPress={() => setShowComment(false)}
        onSwipeComplete={() => setShowComment(false)}
        swipeDirection="down">
        <Comment
          postId={postId}
          liked={isLike}
          countLike={countLike}
          comments={comments}
        />
      </Modal>
      <Modal
        style={{margin: 0, backgroundColor: Colors.WHITE}}
        isVisible={showReport}
        onBackButtonPress={() => setShowReport(false)}
        onSwipeComplete={() => setShowReport(false)}
        swipeDirection="down"
        onModalHide={() => modalHide()}>
        <View style={{flex: 1}}>
          <View style={styles.reportHead}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>B??o c??o</Text>
            <TouchableHighlight
              style={styles.exitReport}
              underlayColor={Colors.WHITESMOKE}
              onPress={() => setShowReport(false)}>
              <Ent name="cross" color={Colors.DARKGRAY} size={30} />
            </TouchableHighlight>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.listReport}>
              <Mat name="chat-alert" size={28} color={Colors.ORANGE1} />
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                Vui l??ng ch???n v???n ????? ????? ti???p t???c
              </Text>
              <Text
                style={{
                  color: Colors.DARKGRAY,
                  marginBottom: 10,
                  fontSize: 15,
                }}>
                B???n c?? th??? b??o c??o b??i vi???t sau khi ch???n v???n ?????.
              </Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {typesReport.map((value, index) => (
                  <Pressable onPress={() => selectType(index)} key={value}>
                    <ReportItem type={value} active={selectedType == index} />
                  </Pressable>
                ))}
              </View>
              {selectedType >= 0 && !emptyDetail.includes(selectedType) ? (
                <View>
                  <Text style={{marginBottom: 15}}>
                    H??y gi??p ch??ng t??i hi???u v???n ?????.
                  </Text>
                  <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {detailsReport[selectedType].map((value, index) => (
                      <Pressable
                        onPress={() => selectDetail(index)}
                        key={value}>
                        <ReportItem
                          type={value}
                          active={selectedDetail == index}
                        />
                      </Pressable>
                    ))}
                  </View>
                </View>
              ) : null}
            </View>
            <View>
              <Text style={styles.actionTitle}>
                C??c b?????c kh??c m?? b???n c?? th??? th???c hi???n
              </Text>
              <TouchableHighlight
                underlayColor={Colors.GRAY91}
                onPress={() => setShowBlock(true)}>
                <View style={styles.action}>
                  <Ent name="block" size={24} style={{margin: 10}} />
                  <View>
                    <Text style={{fontSize: 16}}>
                      Ch???n {userInfo && userInfo.name.split(' ')[0]}
                    </Text>
                    <Text style={{color: Colors.DARKGRAY, width: '90%'}}>
                      C??c b???n s??? kh??ng th??? nh??n th???y ho???c li??n h??? v???i nhau.
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={Colors.GRAY91}
                onPress={() => setShowBlock(true)}>
                <View style={styles.action}>
                  <Ion
                    name="person-remove-outline"
                    size={24}
                    style={{margin: 10}}
                  />
                  <View>
                    <Text style={{fontSize: 16}}>
                      B??? theo d??i {userInfo && userInfo.name.split(' ')[0]}
                    </Text>
                    <Text style={{color: Colors.DARKGRAY}}>
                      D???ng xem b??i vi???t nh??ng v???n l?? b???n b??.
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
              <View style={styles.noti}>
                <Ion
                  name="information-circle"
                  color={Colors.LIGHTGRAY}
                  size={24}
                />
                <Text style={{color: Colors.DARKGRAY, margin: 10}}>
                  N???u b???n nh???n th???y ai ???? ??ang g???p nguy hi???m, ?????ng ch???n ch??? m??
                  h??y b??o ngay cho d???ch v??? c???p c???u t???i ?????a ph????ng.
                </Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.nextContainer}>
            <Pressable
              style={[
                styles.nextButton,
                {
                  backgroundColor:
                    selectedDetail != -1 || emptyDetail.includes(selectedType)
                      ? Colors.BLUE
                      : Colors.GRAY91,
                },
              ]}
              disabled={
                !(selectedDetail != -1 || emptyDetail.includes(selectedType))
              }
              onPress={() => {
                setShowReport(false);
                showReportComplete(true);
              }}>
              <Text
                style={[
                  styles.nextText,
                  {
                    color:
                      selectedDetail != -1 || emptyDetail.includes(selectedType)
                        ? Colors.WHITE
                        : Colors.GRAY,
                    opacity:
                      selectedDetail != -1 || emptyDetail.includes(selectedType)
                        ? 1
                        : 0.5,
                  },
                ]}>
                Ti???p
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        style={{alignItems: 'center'}}
        isVisible={showBlock}
        onBackButtonPress={() => setShowBlock(false)}
        onBackdropPress={() => setShowBlock(false)}
        backdropOpacity={0.6}
        animationIn="fadeIn"
        animationOut="fadeOut">
        <View style={styles.blockContainer}>
          <Ent name="block" size={24} />
          <Text style={{fontWeight: 'bold', fontSize: 17}}>
            Ch???n {userInfo && userInfo.name}?
          </Text>
          <Text style={styles.happenText}>??i???u s??? di???n ra v???i b???n</Text>
          <View style={styles.happenContainer}>
            <FastImage
              source={{uri: uAvt}}
              style={styles.uImage}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.happenContent}>
              B???n s??? kh??ng th??? xem trang c?? nh??n hay nh???n tin cho{' '}
              {userInfo && userInfo.name.split(' ')[0]} n???a.
            </Text>
          </View>
          <Text style={styles.happenText}>
            ??i???u s??? di???n ra v???i {userInfo && userInfo.name.split(' ')[0]}
          </Text>
          <View style={styles.happenContainer}>
            <FastImage
              source={{
                uri:
                  (userInfo && userInfo.avatar) ||
                  'https://i.stack.imgur.com/l60Hf.png',
              }}
              style={styles.uImage}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.happenContent}>
              D?? kh??ng bi???t l?? ???? b??? ch???n nh??ng{' '}
              {userInfo && userInfo.name.split(' ')[0]} s??? kh??ng xem ???????c trang
              c?? nh??n c???a b???n, g???n th??? b???n trong b??i vi???t, nh???n tin hay th??m b???n
              l??m b???n b??.
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableHighlight
              style={[styles.actionButton, {backgroundColor: Colors.GRAY91}]}
              onPress={() => setShowBlock(false)}
              underlayColor={Colors.GAINSBORO}>
              <Text style={{fontWeight: 'bold'}}>H???y</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.actionButton, {backgroundColor: Colors.BLUE}]}
              onPress={() => setShowBlock(false)}
              underlayColor="#185df3">
              <Text style={{fontWeight: 'bold', color: Colors.WHITE}}>
                Ch???n
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Modal
        style={{alignItems: 'center'}}
        isVisible={showDelete}
        onBackButtonPress={() => setShowDelete(false)}
        onBackdropPress={() => setShowDelete(false)}
        backdropOpacity={0.6}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View style={styles.deleteContainer}>
          <Text style={{fontSize: 18, marginBottom: 20}}>X??a b??i vi???t?</Text>
          <Text style={{fontSize: 15, color: Colors.DARKGRAY}}>
            B???n c?? th??? ch???nh s???a b??i vi???t n???u c???n thay ?????i.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 10,
            }}>
            <TouchableHighlight
              style={styles.deleteAction}
              underlayColor={Colors.GRAY91}
              onPress={() => {
                requestDeletePost(postId);
                requestGetPosts({});
                setShowDelete(false);
              }}>
              <Text style={{color: Colors.BLUE}}>X??A</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.deleteAction}
              underlayColor={Colors.GRAY91}
              onPress={() => {
                setShowDelete(false);
                updatePost();
              }}>
              <Text>CH???NH S???A</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.deleteAction}
              underlayColor={Colors.GRAY91}
              onPress={() => setShowDelete(false)}>
              <Text>H???Y</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Modal
        style={styles.reportComplete}
        isVisible={reportComplete}
        onBackButtonPress={() => showReportComplete(false)}
        onSwipeComplete={() => showReportComplete(false)}
        swipeDirection="down">
        <View style={styles.reportCompleteLogo}>
          <Mat name="chat-alert" size={28} color={Colors.WHITE} />
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 16, margin: 10}}>
          C???m ??n b???n ???? cho ch??ng t??i bi???t.
        </Text>
        <View style={styles.reportedButton}>
          <Ion name="checkmark" color={Colors.WHITE} size={20} />
          <Text style={styles.reportedText}> {typesReport[reportedType]}</Text>
        </View>
        {reportedDetail != -1 ? (
          <View style={styles.reportedButton}>
            <Ion name="checkmark" color={Colors.WHITE} size={20} />
            <Text style={styles.reportedText}>
              {' '}
              {detailsReport[reportedType][reportedDetail]}
            </Text>
          </View>
        ) : null}
        <Text style={styles.help}>
          ?? ki???n ????ng g??p c???a b???n gi??p h??? th???ng c???a ch??ng t??i bi???t khi c?? g?? ????
          kh??ng ???n.
        </Text>
        <View style={styles.actionComplete}>
          <Text style={styles.actionTitle}>
            C??c b?????c kh??c m?? b???n c?? th??? th???c hi???n
          </Text>
          <TouchableHighlight
            underlayColor={Colors.GRAY91}
            onPress={() => setShowBlock(true)}>
            <View style={styles.action}>
              <Ent name="block" size={24} style={{margin: 10}} />
              <View>
                <Text style={{fontSize: 16}}>
                  Ch???n {userInfo && userInfo.name.split(' ')[0]}
                </Text>
                <Text style={{color: Colors.DARKGRAY, width: '90%'}}>
                  C??c b???n s??? kh??ng th??? nh??n th???y ho???c li??n h??? v???i nhau.
                </Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={Colors.GRAY91}
            onPress={() => setShowBlock(true)}>
            <View style={styles.action}>
              <Ion
                name="person-remove-outline"
                size={24}
                style={{margin: 10}}
              />
              <View>
                <Text style={{fontSize: 16}}>
                  B??? theo d??i {userInfo && userInfo.name.split(' ')[0]}
                </Text>
                <Text style={{color: Colors.DARKGRAY}}>
                  D???ng xem b??i vi???t nh??ng v???n l?? b???n b??.
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.completeReportButton}>
          <Pressable
            style={[styles.nextButton, {backgroundColor: Colors.BLUE}]}
            onPress={() => showReportComplete(false)}>
            <Text style={[styles.nextText, {color: Colors.WHITE}]}>Xong</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  completeReportButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 0.5,
    padding: 10,
    borderTopColor: Colors.LIGHTGRAY,
  },
  actionComplete: {
    borderTopColor: Colors.LIGHTGRAY,
    borderTopWidth: 0.6,
    marginTop: 20,
  },
  help: {
    color: Colors.DARKGRAY,
    textAlign: 'center',
    width: '90%',
    fontSize: 15,
  },
  reportedText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 13,
  },
  reportedButton: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: Colors.BLUE,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginBottom: 10,
  },
  reportCompleteLogo: {
    backgroundColor: Colors.ORANGE1,
    width: 55,
    height: 55,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  reportComplete: {
    margin: 0,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  deleteAction: {
    padding: 10,
    height: 50,
    justifyContent: 'center',
    borderRadius: 3,
  },
  actionButton: {
    width: 120,
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginTop: 15,
  },
  happenContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
  },
  happenContent: {
    color: Colors.DARKGRAY,
    fontSize: 13,
    width: '79%',
  },
  uImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  happenText: {
    fontWeight: 'bold',
    marginTop: 7,
    color: Colors.BLACK,
  },
  blockContainer: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    width: '80%',
    borderRadius: 3,
  },
  deleteContainer: {
    padding: 20,
    backgroundColor: Colors.WHITE,
    width: '90%',
    borderRadius: 3,
    paddingBottom: 10,
    paddingRight: 10,
  },
  nextContainer: {
    padding: 10,
    borderTopColor: Colors.GAINSBORO,
    borderTopWidth: 0.6,
  },
  nextButton: {
    width: '100%',
    height: 35,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  noti: {
    flexDirection: 'row',
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: Colors.GAINSBORO,
    borderWidth: 1,
    alignItems: 'center',
  },
  actionTitle: {
    fontWeight: 'bold',
    margin: 10,
    marginTop: 15,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  listReport: {
    paddingTop: 7,
    paddingBottom: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 0.6,
    borderBottomColor: Colors.LIGHTGRAY,
  },
  wrap: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginTop: 10,
  },
  headWrap: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  nameWrap: {
    flex: 1,
  },
  likeComment: {
    flexDirection: 'row',
    borderBottomColor: Colors.LIGHTGRAY,
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 5,
  },
  buttonWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dot: {
    fontSize: 10,
  },
  btnOption: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 15,
  },
  avatar: {
    height: 40,
    width: 40,
    marginRight: 8,
    borderRadius: 50,
  },
  privacy: {
    height: 13,
    width: 13,
    borderRadius: 50,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: -3,
  },
  time: {
    fontSize: 13,
    color: Colors.DARKGRAY,
    marginTop: 3,
  },
  content: {
    marginLeft: 16,
    marginTop: 5,
    marginBottom: 10,
  },
  modal: {
    margin: 0,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Colors.WHITE,
  },
  saveContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    height: 60,
  },
  like: {
    width: 17,
    height: 17,
    marginRight: 5,
  },
  likeNum: {
    color: Colors.DARKGRAY,
    fontSize: 13,
    padding: 10,
    paddingLeft: 0,
  },
  button: {
    width: '50%',
    height: 42,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 9,
  },
  likeText: {
    alignSelf: 'center',
    fontSize: 13,
    color: Colors.DARKGRAY,
    fontWeight: 'bold',
  },
  dotButton: {
    height: 40,
    borderRadius: 20,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 5,
  },
  reportHead: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderBottomColor: Colors.LIGHTGRAY,
    borderBottomWidth: 0.5,
    width: '100%',
  },
  exitReport: {
    position: 'absolute',
    right: 0,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestLikePost: (params) => {
      dispatch(requestLikePost(params));
    },
    requestUnlikePost: (params) => {
      dispatch(requestUnlikePost(params));
    },
    requestDeletePost: (params) => {
      dispatch(requestDeletePost(params));
    },
    requestGetPosts: (params) => {
      dispatch(requestGetPosts(params));
    },
    requestGetComments: (params) => {
      dispatch(requestGetComments(params));
    },
  };
};

const PostConnected = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostConnected;
