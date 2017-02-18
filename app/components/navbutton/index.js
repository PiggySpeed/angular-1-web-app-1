module.exports = function navButton() {
  return {
    restrict: 'E',
    templateUrl: './components/navbutton/NavButton.html',
    replace: true,
    scope: {
      navUrl: '@'
    },
    transclude: true
  }
};