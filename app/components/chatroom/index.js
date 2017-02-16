module.exports = function chatRoom() {
  return {
    restrict: 'E',
    templateUrl: './components/chatroom/ChatRoom.html',
    scope: {
      handleSubmit: '&'
    }
  }
};