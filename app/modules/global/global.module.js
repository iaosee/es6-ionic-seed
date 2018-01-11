
import TestService  from './service/test.service';
import ChatsService from './service/chats.service';
import ToolsService from './service/tools.service';

export default angular
  .module('app.global', [])
  .service('TestService', TestService)
  .service('ChatsService', ChatsService)
  .service('ToolsService', ToolsService)
  .name;
