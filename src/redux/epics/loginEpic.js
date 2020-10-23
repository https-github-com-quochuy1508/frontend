import {map, switchMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {
  authenticateSuccess,
  authenticateFail,
  REQUEST_AUTHENTICATE_USER,
} from '../actions/loginAction';

import userApi from '../services/userServices';
import {from} from 'rxjs';

const loginEpic = (action$) =>
  action$.pipe(
    ofType(REQUEST_AUTHENTICATE_USER),
    switchMap((action) => {
      return from(userApi.authendicate(action.payload)).pipe(
        map((response) => {
          if (response.success) {
            userApi.setToken(response.token);
            return authenticateSuccess(response);
          } else {
            return authenticateFail(response.error);
          }
        }),
      );
    }),
  );
export default loginEpic;
