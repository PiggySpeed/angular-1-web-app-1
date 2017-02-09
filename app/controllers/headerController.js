function generateId() {
  return Math.ceil(Math.random() *10000) + '';
}

module.exports = function appController($scope) {
  $scope.bear = 'Hey Companies!';

  $scope.currentAnimal = '';

  $scope.animals = [
    {id: '34213', type: 'penguin'},
    {id: '68125', type: 'bear'},
    {id: '32014', type: 'cat'},
    {id: '92514', type: 'seal'},
    {id: '67145', type: 'piggy'}
  ];

  $scope.addAnimal = function(animal) {
    $scope.animals.push({
      id: generateId(),
      type: animal
    });
    $scope.currentAnimal = '';
  };

  $scope.deleteAnimal = function(animalId) {
    $scope.animals = $scope.animals.filter(function(animal) {
      return animal.id !== animalId
    });
    $scope.currentAnimal = '';
  }

};
