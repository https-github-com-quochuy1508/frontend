import {map, switchMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {
  GET_LIST_FRIEND_REQUEST,
  getListFriendRequestSuccess,
  getListFriendRequestFail,
  UPDATE_STATUS_FRIEND_REQUEST,
  updateStatusFriendSuccess,
  updateStatusFriendFail,
} from '../actions/friendAction';
import {
  REQUEST_GET_INFO_FRIEND,
  getInfoFriendSuccess,
  getInfoFriendFail,
} from '../actions/userAction';
import {combineEpics} from 'redux-observable';
import friendApi from '../services/friendServices';
import userApi from '../services/userServices';
import {from} from 'rxjs';

const getListRequestFriendEpic = (action$) =>
  action$.pipe(
    ofType(GET_LIST_FRIEND_REQUEST),
    switchMap((action) => {
      // console.log('action: ', action);
      return from(friendApi.get(action.payload)).pipe(
        map((response) => {
          // console.log('response: ', response);
          if (response) {
            return getListFriendRequestSuccess(response);
          } else {
            return getListFriendRequestFail(response);
          }
        }),
      );
    }),
  );
const getInfoFriendEpic = (action$) =>
  action$.pipe(
    ofType(REQUEST_GET_INFO_FRIEND),
    switchMap((action) => {
      console.log('action: ', action);
      return from(userApi.getInfoFriend(action.payload)).pipe(
        map((response) => {
          console.log('response: ', response);
          if (response) {
            return getInfoFriendSuccess(response);
          } else {
            return getInfoFriendFail(response);
          }
        }),
      );
    }),
  );

const changeStatusFriendEpic = (action$) =>
  action$.pipe(
    ofType(UPDATE_STATUS_FRIEND_REQUEST),
    switchMap((action) => {
      // console.log('action: ', action);
      return from(friendApi.update(action.payload.id, action.payload)).pipe(
        map((response) => {
          // console.log('response: ', response);
          if (response && response.success) {
            return updateStatusFriendSuccess(response.result);
          }
        }),
      );
    }),
  );

export default combineEpics(
  getListRequestFriendEpic,
  changeStatusFriendEpic,
  getInfoFriendEpic,
);
