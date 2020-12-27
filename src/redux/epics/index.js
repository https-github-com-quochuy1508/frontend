import {combineEpics} from 'redux-observable';

import loginEpic from './loginEpic';
import signupEpic from './signupEpic';
import postEpic from './postEpic';
import mediaEpic from './mediaEpic';
import likeEpic from './likeEpic';
import friendEpic from './friendEpic';
import userEpic from './userEpic';
import commentEpic from './commentEpic';

const rootEpic = combineEpics(
  loginEpic,
  signupEpic,
  postEpic,
  mediaEpic,
  likeEpic,
  friendEpic,
  userEpic,
  commentEpic,
);

export default rootEpic;
