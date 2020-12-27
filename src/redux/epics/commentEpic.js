import {map, switchMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {combineEpics} from 'redux-observable';
import {from} from 'rxjs';

import {
    REQUEST_CREATE_COMMENT,
    createCommentSuccess,
    createCommentFail,
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

export default combineEpics(
    createCommentEpic
);
