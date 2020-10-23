import {combineEpics} from 'redux-observable';

import loginEpic from './loginEpic';
import signupEpic from './signupEpic';

const rootEpic = combineEpics(loginEpic, signupEpic);

export default rootEpic;
