module.exports = function sideDescription() {
  return {
    restrict: 'E',
    templateUrl: './components/sidedescription/SideDescription.html',
    replace: true,
    link: function(scope, element, attributes) {
      scope.sideHeader = attributes.sideHeader;
      scope.sideText = attributes.sideText;
    },
    scope: {
      sideHeader: '@',
      sideText: '@'
    },
    transclude: true
  }
};