import {map, switchMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {
  REQUEST_GET_CURRENT_USER,
  getCurrentUserSuccess,
  getCurrentUserFail,
  REQUEST_CHANGE_USER,
  changeUserSuccess,
  changeUserFail,
} from '../actions/userAction';
import {combineEpics} from 'redux-observable';
import userApi from '../services/userServices';
import {from} from 'rxjs';

const getCurrentUserEpic = (action$) =>
  action$.pipe(
    ofType(REQUEST_GET_CURRENT_USER),
    switchMap((action) => {
      // console.log('action: ', action);
      return from(userApi.getCurrentUser()).pipe(
        map((response) => {
          // console.log('response: ', response);
          if (response) {
            return getCurrentUserSuccess(response);
          } else {
            return getCurrentUserFail(null);
          }
        }),
      );
    }),
  );

const changeUserEpic = (action$) =>
  action$.pipe(
    ofType(REQUEST_CHANGE_USER),
    switchMap((action) => {
      // console.log('action: ', action);
      return from(userApi.update(action.payload.id, action.payload)).pipe(
        map((response) => {
          // console.log('response: ', response);
          if (response && response.success) {
            return changeUserSuccess(response);
          } else {
            return changeUserFail(response);
          }
        }),
      );
    }),
  );

export default combineEpics(getCurrentUserEpic, changeUserEpic);
