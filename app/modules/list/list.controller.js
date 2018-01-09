
export default class ListController {
  static $inject = ['$scope', 'ChatsService'];

  chats = [];

  constructor($scope, ChatsService) {
    console.log(ChatsService);

    [ this.$scope,
      this.ChatsService,
    ] = [...arguments];

    console.log(ChatsService);

    this.chats = ChatsService.all();
    console.log(ChatsService);

  }

  remove(chat) {
    this.ChatsService.remove(chat);
  }

}
