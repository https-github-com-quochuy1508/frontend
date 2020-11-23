import {map, switchMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {
  REQUEST_CREATE_POST,
  createPostSuccess,
  createPostFail,
} from '../actions/postAction';

import postApi from '../services/postServices';
import {from} from 'rxjs';

const loginEpic = (action$) =>
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
export default loginEpic;
