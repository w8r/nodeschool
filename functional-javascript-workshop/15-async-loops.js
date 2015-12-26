// I chose to go sequential, not parallel

module.exports = function loadUsers(userIds, load, done) {
  var users = [];
  function onUserLoad(user) {
    users.push(user);
    if (userIds.length === 0) {
      done(users);
    } else {
      load(userIds.pop(), onUserLoad);
    }
  }
  load(userIds.pop(), onUserLoad);
};
