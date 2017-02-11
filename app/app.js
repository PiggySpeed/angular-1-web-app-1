var angular = require('angular');
//var route = require('angular-route');

//var router = require('./config/router.js');
var headerCtrl = require('./controllers/headerController.js');
var listCtrl = require('./controllers/listController.js');
var EditCtrl = require('./controllers/editController.js');
var AnimalSrv = require('./services/animalService.js');

module.exports = angular.module('myApp', [require('angular-route')])
  .config(function($routeProvider) {
    $routeProvider
      .when('/chat', {
        templateUrl: '/partials/chat.html'
      })
      .when('/front', {
        templateUrl: '/partials/front.html'
      })
      .otherwise({
        redirectTo: '/chat'
      })
    }
  )
  .controller('HeadCtrl', headerCtrl)
  .controller('ListCtrl', listCtrl)
  .controller('EditCtrl', EditCtrl)
  .service('AnimalSrv', AnimalSrv);
