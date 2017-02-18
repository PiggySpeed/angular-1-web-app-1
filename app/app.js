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

// Controllers - Mock
var ScaleCtrl = require('./components/scalecomponent/scaleComponentController.js');

// Services
var ChatSrv = require('./services/chatService.js');

// Component Directives
var animalPicker = require('./components/animalpicker');
var animalIcon = require('./components/animalicon');
var chatExit = require('./components/chatexit');
var animalChat = require('./components/animalchat');
var chatRoom = require('./components/chatroom');
var navButton = require('./components/navbutton');
var sideDescription = require('./components/sidedescription');

// Component directives - Mock
var scaleContainer = require('./components/scalecomponent').scaleContainer;
var scaleItem = require('./components/scalecomponent').scaleItem;

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
  .controller('ScaleCtrl', ScaleCtrl)
  .directive('animalPicker', animalPicker)
  .directive('animalIcon', animalIcon)
  .directive('chatExit', chatExit)
  .directive('animalChat', animalChat)
  .directive('chatRoom', chatRoom)
  .directive('navButton', navButton)
  .directive('sideDescription', sideDescription)
  .directive('scrollBottom', scrollBottom)
  .directive('scaleContainer', scaleContainer)
  .directive('scaleItem', scaleItem)
  .service('ChatSrv', ChatSrv);
