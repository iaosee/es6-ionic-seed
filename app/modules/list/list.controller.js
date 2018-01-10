
import ChatsService from "../global/service/chats.service";


export default class ListController {
  static $inject = ['$scope', 'ChatsService'];

  chats = [];

  constructor($scope, ChatsService) {

    [ this.$scope,
      this.ChatsService,
    ] = [...arguments];

    console.log(this.ChatsService)

    this.chats = this.ChatsService.all();

  }

  remove(chat) {
    this.ChatsService.remove(chat);
  }

}
