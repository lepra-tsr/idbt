'use strict';
const {
  readConfig
} = require('./config');
const {
  fetchUserInfo
} = require('./initHandler');

exports.testHandler = async () => {
  const user = await fetchUserInfo()
  console.log(user);
  console.log('FINISHED calling API with stored token.');
}