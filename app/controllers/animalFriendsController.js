module.exports = function animalFriendsController($scope) {
  $scope.animalFriendClick = function(options) {
    console.log('i am lolol yey', options.id);
  };
};
