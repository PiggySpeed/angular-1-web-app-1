module.exports = function($routeProvider) {
  $routeProvider.when('/chat', {
      templateUrl: '/partials/chat.html'
    }).when('/front', {
      templateUrl: '/partials/front.html'
    }).otherwise({
      redirectTo: '/chat'
    });
};