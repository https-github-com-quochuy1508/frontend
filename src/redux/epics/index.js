import {combineEpics} from 'redux-observable';

import loginEpic from './loginEpic';
import signupEpic from './signupEpic';
import postEpic from './postEpic';
import mediaEpic from './mediaEpic';
import likeEpic from './likeEpic';
import friendEpic from './friendEpic';
import userEpic from './userEpic';

const rootEpic = combineEpics(
  loginEpic,
  signupEpic,
  postEpic,
  mediaEpic,
  likeEpic,
  friendEpic,
  userEpic,
);

export default rootEpic;
