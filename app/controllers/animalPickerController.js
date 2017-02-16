module.exports = function animalPickerController($scope, $state) {
  $scope.animalClick = function(options) {
    console.log('i am clickeedd yey', options.id);
    $state.transitionTo('chat');
  };
};
