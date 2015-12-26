function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(u) {
    	return goodUsers.some(function(vu) {
    		return vu.id === u.id;
    	});
    });
  };
}
    
module.exports = checkUsersValid
