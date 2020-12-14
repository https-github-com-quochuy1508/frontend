import {map, switchMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {
  GET_LIST_FRIEND_REQUEST,
  getListFriendRequestSuccess,
  getListFriendRequestFail,
} from '../actions/friendAction';
import {combineEpics} from 'redux-observable';
import friendApi from '../services/friendServices';
import {from} from 'rxjs';

const getListRequestFriendEpic = (action$) =>
  action$.pipe(
    ofType(GET_LIST_FRIEND_REQUEST),
    switchMap((action) => {
      console.log('action: ', action);
      return from(friendApi.get(action.payload)).pipe(
        map((response) => {
          console.log('response: ', response);
          if (response) {
            return getListFriendRequestSuccess(response);
          } else {
            return getListFriendRequestFail(response.error);
          }
        }),
      );
    }),
  );

export default combineEpics(getListRequestFriendEpic);
