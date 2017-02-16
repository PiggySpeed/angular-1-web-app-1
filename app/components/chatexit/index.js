module.exports = function chatExit() {
  return {
    restrict: 'E',
    templateUrl: './components/chatexit/ChatExit.html',
    replace: true,
    scope: {
      handleClick: '&'
    }
  }
};