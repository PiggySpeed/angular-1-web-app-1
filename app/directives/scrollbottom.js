module.exports = function scrollBottom($timeout) {
  return {
    scope: {
      scrollBottom: "="
    },
    link: function (scope, element) {
      scope.$watchCollection('scrollBottom', function(newValue) {
        if (newValue) {
          $timeout(function(){
            element[0].scrollTop = element[0].scrollHeight;
            console.log('element is ', element[0]);
            console.log('scroltop is ', element[0].scrollTop);
            console.log('scrollheight is ', element[0].scrollHeight);
          }, 0);
        }
      }, true);
    }
  }
};
