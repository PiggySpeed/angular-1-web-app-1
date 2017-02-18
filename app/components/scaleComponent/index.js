function scaleContainer() {
  return {
    restrict: 'E',
    templateUrl: './components/scalecomponent/ScaleContainer.html',
    controller: 'ScaleCtrl',
    controllerAs: 'ctrl',
    replace: true,
    scope: {
      className: '@'
    },
    transclude: true
  }
}

function scaleItem() {
  return {
    restrict: 'E',
    templateUrl: './components/scalecomponent/ScaleItem.html',
    controller: 'ScaleCtrl',
    controllerAs: 'ctrl',
    replace: true,
    scope: {
      spriteClassFull: '@',
      spriteClassHalf: '@',
      spriteClassEmpty: '@',
      className: '@',
      handleClick: '&'
    }
  }
}
module.exports = {
  scaleContainer: scaleContainer,
  scaleItem: scaleItem
};