import {map, switchMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {
  REQUEST_DELETE_MEDIA,
  deleteMediaSuccess,
  deleteMediaFail,
} from '../actions/mediaAction';

import mediaApi from '../services/mediaServices';
import {from} from 'rxjs';

const deleteMediaEpic = (action$) =>
  action$.pipe(
    ofType(REQUEST_DELETE_MEDIA),
    switchMap((action) => {
      // console.log('action: ', action);
      return from(mediaApi.deleteImage(action.payload)).pipe(
        map((response) => {
          // console.log('response: ', response);
          if (response.success) {
            return deleteMediaSuccess(response);
          } else {
            return deleteMediaFail(response.error);
          }
        }),
      );
    }),
  );
export default deleteMediaEpic;
