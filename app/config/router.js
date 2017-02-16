module.exports = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  var frontState = {
    name: 'front',
    url: '/',
    templateUrl: '/partials/front.html'
  };

  var chatState = {
    name: 'chat',
    url: '/chat',
    templateUrl: '/partials/chat.html'
  };

  $stateProvider.state(frontState);
  $stateProvider.state(chatState);
};