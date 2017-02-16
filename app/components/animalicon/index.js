module.exports = function animalIcon() {
  return {
    restrict: 'E',
    templateUrl: './components/animalicon/AnimalIcon.html',
    replace: true,
    scope: {
      className: '@',
      iconWidth: '@',
      iconUrl: '@',
      handleClick: '&'
    }
  }
};