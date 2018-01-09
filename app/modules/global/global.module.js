import TestService  from "./service/test.service";
import ChatsService from "./service/chats.service";

export default angular
  .module('app.global', [])
  .service('TestService', TestService)
  .service('ChatsService', ChatsService)
  .name;
