var angular = require('angular');
var router = require('angular-ui-router');

var headerCtrl = require('./controllers/headerController.js');
var listCtrl = require('./controllers/listController.js');
var EditCtrl = require('./controllers/editController.js');
var AnimalSrv = require('./services/animalService.js');

module.exports = angular.module('myApp', [router])
  .config(function($stateProvider) {
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
    //$routeProvider
    //  .when('/', {
    //    templateUrl: './partials/front.html'
    //  })
    //  .when('/chat', {
    //    templateUrl: './partials/chat.html'
    //  })
    //  .otherwise({
    //    redirectTo: '/front'
    //  })
    }
  )
  .controller('HeadCtrl', headerCtrl)
  .controller('ListCtrl', listCtrl)
  .controller('EditCtrl', EditCtrl)
  .service('AnimalSrv', AnimalSrv);
