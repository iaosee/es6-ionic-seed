
export default class ChatsService {
  static $inject = ['$http'];

  _chats = [];

  constructor() {

    [ this.$http,
    ] = [...arguments];

    this.initChats();

  }

  all() {
    return this._chats;
  }

  remove(chat) {
    this._chats.splice(this._chats.indexOf(chat), 1);
  }

  get(chatId) {
    for (var i = 0; i < this._chats.length; i++) {
      if (this._chats[i].id === parseInt(chatId)) {
        return this._chats[i];
      }
    }
  }

  initChats() {
    this._chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      // face: require('app/images/avatar-01.png')
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      // face: require('app/images/avatar-02.png')
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      // face: require('app/images/avatar-03.png')
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      // face: require('app/images/avatar-04.png')
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      // face: require('app/images/avatar-05.png')
    }];
  }

}
