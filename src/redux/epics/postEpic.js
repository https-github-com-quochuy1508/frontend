import {map, switchMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {
  REQUEST_CREATE_POST,
  createPostSuccess,
  createPostFail,
  REQUEST_UPDATE_POST,
  updatePostSuccess,
  updatePostFail,
} from '../actions/postAction';
import {combineEpics} from 'redux-observable';
import postApi from '../services/postServices';
import {from} from 'rxjs';

const createPostEpic = (action$) =>
  action$.pipe(
    ofType(REQUEST_CREATE_POST),
    switchMap((action) => {
      console.log('action: ', action);
      return from(postApi.create(action.payload)).pipe(
        map((response) => {
          console.log('response: ', response);
          if (response.success) {
            return createPostSuccess(response);
          } else {
            return createPostFail(response.error);
          }
        }),
      );
    }),
  );

const updatePostEpic = (action$) =>
  action$.pipe(
    ofType(REQUEST_UPDATE_POST),
    switchMap((action) => {
      console.log('action: ', action);
      return from(postApi.update(action.payload.id, action.payload)).pipe(
        map((response) => {
          console.log('response: ', response);
          if (response.success) {
            return updatePostSuccess(response);
          } else {
            return updatePostFail(response.error);
          }
        }),
      );
    }),
  );

export default combineEpics(createPostEpic, updatePostEpic);
