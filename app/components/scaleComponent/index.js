function scaleContainer() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './components/scalecomponent/ScaleContainer.html',
    transclude: true
  }
}

function scaleItem() {
  return {
    restrict: 'E',
    templateUrl: './components/scalecomponent/ScaleItem.html',
    replace: true,
    controller: 'ScaleCtrl',
    controllerAs: 'ctrl',
    scope: {
      index: '@',
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