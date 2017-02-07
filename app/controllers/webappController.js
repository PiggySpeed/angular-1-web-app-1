var angular = require('angular');

function appController($scope) {
  $scope.bear = 'Hey Bearsss!';
}

angular.module('myApp', [])
  .controller('AppCtrl', function($scope) {
    $scope.bear = 'HAY BEAR!';
  });
