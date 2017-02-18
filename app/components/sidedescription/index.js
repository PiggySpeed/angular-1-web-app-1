module.exports = function sideDescription() {
  return {
    restrict: 'E',
    templateUrl: './components/sidedescription/SideDescription.html',
    replace: true,
    scope: {
      header: '@',
      text: '@'
    },
    transclude: true
  }
};