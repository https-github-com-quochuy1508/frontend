import {combineEpics} from 'redux-observable';

import loginEpic from './loginEpic';
import signupEpic from './signupEpic';
import postEpic from './postEpic';
import mediaEpic from './mediaEpic';

const rootEpic = combineEpics(loginEpic, signupEpic, postEpic, mediaEpic);

export default rootEpic;
