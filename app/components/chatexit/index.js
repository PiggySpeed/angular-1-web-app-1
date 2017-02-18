module.exports = function chatExit() {
  return {
    restrict: 'E',
    templateUrl: './components/navbutton/SideDescription.html',
    replace: true,
    scope: {
      handleClick: '&'
    }
  }
};