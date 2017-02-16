module.exports = function animalChatController($scope, ChatSrv) {

  var objDiv = document.getElementById("chat-room-scroll-effect");

  $scope.chatLog = ChatSrv.getMessages();

  $scope.currentText = '';

  $scope.submitMessage = function(userId, text) {
    console.log('i am lolol yey', userId, text);

    if(text.trim() !== '') {
      ChatSrv.addMessage(userId, text);
      $scope.currentText = '';

      // Scroll to the bottom
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  };

  $scope.deleteMessage = function(id) {
    console.log('deleting', id);
    ChatSrv.deleteMessage(id);
  };

};
