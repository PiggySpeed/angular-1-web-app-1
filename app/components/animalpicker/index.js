module.exports = function animalPicker() {
  return {
    restrict: 'E',
    templateUrl: './components/animalpicker/AnimalPicker.html',
    link: function(scope, element, attrs) {
      scope.greeting = attrs.greeting;
    },
    scope: {
      greeting: '@'
    }
  }
};