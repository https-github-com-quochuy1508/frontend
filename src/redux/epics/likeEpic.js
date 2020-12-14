import {map, switchMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {
  REQUEST_LIKE_POST,
  likePostSuccess,
  likePostFail,
  REQUEST_UNLIKE_POST,
  unLikePostSuccess,
  unLikePostFail,
} from '../actions/likeAction';
import {combineEpics} from 'redux-observable';
import likeApi from '../services/likeServices';
import {from} from 'rxjs';

const likeEpic = (action$) =>
  action$.pipe(
    ofType(REQUEST_LIKE_POST),
    switchMap((action) => {
      return from(likeApi.create(action.payload)).pipe(
        map((response) => {
          console.log('response: ', response);
          if (response.success) {
            return likePostSuccess(response);
          } else {
            return likePostFail(response.error);
          }
        }),
      );
    }),
  );

const unlikeEpic = (action$) =>
  action$.pipe(
    ofType(REQUEST_UNLIKE_POST),
    switchMap((action) => {
      return from(likeApi.delete(action.payload)).pipe(
        map((response) => {
          console.log('response: ', response);
          if (response.success) {
            return unLikePostSuccess(response);
          } else {
            return unLikePostFail(response.error);
          }
        }),
      );
    }),
  );
export default combineEpics(likeEpic, unlikeEpic);
