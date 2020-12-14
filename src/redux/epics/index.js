import {combineEpics} from 'redux-observable';

import loginEpic from './loginEpic';
import signupEpic from './signupEpic';
import postEpic from './postEpic';
import mediaEpic from './mediaEpic';
import likeEpic from './likeEpic';

const rootEpic = combineEpics(loginEpic, signupEpic, postEpic, mediaEpic, likeEpic);

export default rootEpic;
