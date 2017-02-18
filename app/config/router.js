module.exports = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  var front = {
    name: 'front',
    url: '/',
    templateUrl: '/pages/front.html'
  };

  var chat = {
    name: 'chat',
    url: '/chat',
    templateUrl: '/pages/chat.html'
  };

  var mock = {
    name: 'mock',
    url: '/mock',
    templateUrl: '/pages/mocks.html'
  };

  var rotateSelector = {
    name: 'mock/rotateselector',
    parent: mock,
    url: '/rotateselector',
    templateUrl: '/pages/mockpages/rotateselector.html'
  };

  var ruler = {
    name: 'mock/ruler',
    parent: mock,
    url: '/ruler',
    templateUrl: '/pages/mockpages/ruler.html'
  };

  $stateProvider.state(front);
  $stateProvider.state(chat);
  $stateProvider.state(mock);
  $stateProvider.state(rotateSelector);
  $stateProvider.state(ruler);
};