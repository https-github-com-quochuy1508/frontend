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
import {combineEpics} from 'redux-observable';
import friendApi from '../services/friendServices';
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

export default combineEpics(getListRequestFriendEpic, changeStatusFriendEpic);
