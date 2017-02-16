var angular = require('angular');
var uiRouter = require('angular-ui-router');

var router = require('./config/router.js');

// Controllers
var headerCtrl = require('./controllers/headerController.js');
var listCtrl = require('./controllers/listController.js');
var EditCtrl = require('./controllers/editController.js');
var AnimalPickerCtrl = require('./controllers/animalPickerController.js');
var AnimalFriendsCtrl = require('./controllers/animalFriendsController.js');
var AnimalChatCtrl = require('./controllers/animalChatController.js');
var SideNavCtrl = require('./controllers/sideNavController.js');

// Services
var ChatSrv = require('./services/chatService.js');

// Component Directives
var animalPicker = require('./components/animalpicker');
var animalIcon = require('./components/animalicon');
var chatExit = require('./components/chatexit');
var animalChat = require('./components/animalchat');
var chatRoom = require('./components/chatroom');

// Utility Directives
var scrollBottom = require('./directives/scrollbottom');

module.exports = angular.module('myApp', [uiRouter])
  .config(router)
  .controller('HeadCtrl', headerCtrl)
  .controller('ListCtrl', listCtrl)
  .controller('EditCtrl', EditCtrl)
  .controller('AnimalPickerCtrl', AnimalPickerCtrl)
  .controller('AnimalFriendsCtrl', AnimalFriendsCtrl)
  .controller('AnimalChatCtrl', AnimalChatCtrl)
  .controller('SideNavCtrl', SideNavCtrl)
  .directive('animalPicker', animalPicker)
  .directive('animalIcon', animalIcon)
  .directive('chatExit', chatExit)
  .directive('animalChat', animalChat)
  .directive('chatRoom', chatRoom)
  .directive('scrollBottom', scrollBottom)
  .service('ChatSrv', ChatSrv);
