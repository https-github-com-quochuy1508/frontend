import {map, switchMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {combineEpics} from 'redux-observable';
import {from} from 'rxjs';

import {
    REQUEST_CREATE_COMMENT,
    createCommentSuccess,
    createCommentFail,

    REQUEST_GET_COMMENTS,
    getCommentsSuccess,
    getCommentsFail
} from '../actions/commentAction';

import commentService from '../services/commentService';

import {navigate} from '../../../rootNavigation';

const createCommentEpic = (action$) =>
  action$.pipe(
    ofType(REQUEST_CREATE_COMMENT),
    switchMap((action) => {
      return from(commentService.create(action.payload)).pipe(
        map((response) => {
          // console.log('response: ', response);
          if (response.success) {
            return createCommentSuccess(response);
          } else {
            return createCommentFail(response.error);
          }
        }),
      );
    }),
  );

  const getCommentsEpic = (action$) =>
  action$.pipe(
    ofType(REQUEST_GET_COMMENTS),
    switchMap((action) => {
      // console.log('action: ', action);
      return from(commentService.get(action.payload)).pipe(
        map((response) => {
          console.log('response:88888888888888888 ', response);
          if (response && response.count !== null && response.count !== undefined) {
            // console.log('response: ', response);
            return getCommentsSuccess(response);
          } else {
            return getCommentsFail(response.error);
          }
        }),
      );
    }),
  );

export default combineEpics(
    createCommentEpic,
    getCommentsEpic,
);
