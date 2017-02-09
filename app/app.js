var angular = require('angular');

var headerCtrl = require('./controllers/headerController.js');
var listCtrl = require('./controllers/listController.js');

module.exports = angular.module('myApp', [])
  .controller('HeadCtrl', headerCtrl)
  .controller('ListCtrl', listCtrl);
