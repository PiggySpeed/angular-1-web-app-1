var moment = require('moment');
var genId = require('../utils/generateid.js');

module.exports = function chatService() {

  // TODO: add firebase operations here
  var chatLog = [
    {id: '21d2rg-4g2f43', userId: 'wolf-1', timestamp: 'Wednesday, February 15, 2017 11:03 PM' ,text: 'HAY HAY GUYSSS!!! WANNA PARTYYYYY?!?!?'},
    {id: 'f4f3f1-f3sr21', userId: 'shark-1', timestamp: 'Wednesday, February 15, 2017 11:03 PM', text: 'HELL YEAH'},
    {id: 'wf9fwj-20vfkk', userId: 'fox-1', timestamp: 'Wednesday, February 15, 2017 11:04 PM', text: 'i got the drinks'},
    {id: 'c9ekk9-a3w2d3', userId: 'wolf-1', timestamp: 'Wednesday, February 15, 2017 11:05 PM', text: 'yayyyy'}
  ];

  function addMessage(userId, text) {
    chatLog.push({
      id: genId.generateId(),
      userId: userId,
      text: text,
      timestamp: moment().format('LLLL')
    });
  }

  function deleteMessage(id) {
    chatLog.filter(function(log) {
      return log.id !== id
    });
  }

  function getMessages() {
    return chatLog;
  }

  return {
    addMessage: addMessage,
    deleteMessage: deleteMessage,
    getMessages: getMessages
  };

};
