import {map, switchMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {
  REQUEST_GET_CURRENT_USER,
  getCurrentUserSuccess,
  getCurrentUserFail,
} from '../actions/userAction';
import {combineEpics} from 'redux-observable';
import friendApi from '../services/friendServices';
import {from} from 'rxjs';

const getCurrentUserEpic = (action$) =>
  action$.pipe(
    ofType(REQUEST_GET_CURRENT_USER),
    switchMap((action) => {
      console.log('action: ', action);
      return from(friendApi.get(action.payload)).pipe(
        map((response) => {
          console.log('response: ', response);
          if (response) {
            return getCurrentUserSuccess(response);
          } else {
            return getCurrentUserFail(response);
          }
        }),
      );
    }),
  );

export default combineEpics(getCurrentUserEpic);
