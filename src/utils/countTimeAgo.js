import moment from 'moment';

const countTimeAgo = (time) => {
  return moment(time).fromNow();
};
export default countTimeAgo;
