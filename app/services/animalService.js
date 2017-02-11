module.exports = function animalService() {

  var animals = [
    {id: '34213', type: 'penguin', isCool: true},
    {id: '68125', type: 'bear', isCool: true},
    {id: '32014', type: 'cat', isCool: false},
    {id: '92514', type: 'seal', isCool: false},
    {id: '67145', type: 'piggy', isCool: true}
  ];

  function addAnimal(animal) {
    animals.push(animal);
  }

  function deleteAnimal(animalId) {
    animals.filter(function(animal) {
      return animal.id !== animalId
    });
  }

  function updateAnimal(newAnimal) {
    animals.forEach(function(animal) {
      if (animal.id === newAnimal.id) {
        animal = newAnimal;
      }
      return animal;
    })
  }

  function getAnimals() {
    return animals;
  }

  return {
    addAnimal: addAnimal,
    deleteAnimal: deleteAnimal,
    updateAnimal: updateAnimal,
    getAnimals: getAnimals
  };

};
