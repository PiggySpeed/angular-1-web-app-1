function generateId() {
  return Math.ceil(Math.random() *10000) + '';
}

module.exports = function appController($scope, AnimalSrv) {
  $scope.bear = 'Hey Animals!';

  $scope.inputAnimal = '';

  $scope.animals = AnimalSrv.getAnimals();

  $scope.addAnimal = function(animal) {
    AnimalSrv.addAnimal({
      id: generateId(),
      type: animal,
      isCool: true
    });
    $scope.inputAnimal = '';
  };

  $scope.showCoolAnimals = false;

  $scope.toggleViewCool = function() {
    $scope.showCoolAnimals = !$scope.showCoolAnimals;
  };

  $scope.deleteAnimal = function(animalId) {
    $scope.animals = $scope.animals.filter(function(animal) {
      return animal.id !== animalId
    });
    $scope.inputAnimal = '';
  };

};
