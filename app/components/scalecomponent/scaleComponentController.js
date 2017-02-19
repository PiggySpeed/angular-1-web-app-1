module.exports = function scaleComponentController($scope, ScaleSrv) {

  $scope.handleClick = function(index) {
    ScaleSrv.setIndex(index);
  };

  $scope.isSelected = function(index) {
    return index <= ScaleSrv.getData().currentIndex;
  }

};
