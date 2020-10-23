import {map, switchMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {
  signupSuccess,
  signupFail,
  REQUEST_CREATE_USER,
} from '../actions/signupAction';

import userApi from '../services/userServices';
import {from} from 'rxjs';

const signupEpic = (action$) =>
  action$.pipe(
    ofType(REQUEST_CREATE_USER),
    switchMap((action) => {
      return from(userApi.create(action.payload)).pipe(
        map((response) => {
          if (response.success) {
            return signupSuccess(response);
          } else {
            return signupFail(response.error);
          }
        }),
      );
    }),
  );
export default signupEpic;
