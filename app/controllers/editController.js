module.exports = function editController($scope) {
  $scope.selectedAnimal = {
    id: '',
    type: '',
    isCool: false
  };

  $scope.saveAnimalChanges = function() {
    console.log('awfeawefawef ');
    //var newAnimals = AnimalSrv.map(function(animal) {
    //  if (animal.id === $scope.selectedAnimal.id) {
    //    return $scope.selectedAnimal;
    //  }
    //  return animal;
    //});
  };
};
