import {combineEpics} from 'redux-observable';

import loginEpic from './loginEpic';
import signupEpic from './signupEpic';
import postEpic from './postEpic';

const rootEpic = combineEpics(loginEpic, signupEpic, postEpic);

export default rootEpic;
