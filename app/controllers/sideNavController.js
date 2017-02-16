module.exports = function sideNavController($scope, $state) {
  $scope.chatExitClick = function() {
    console.log('im leaving!');
    $state.transitionTo('front');
  };
};
