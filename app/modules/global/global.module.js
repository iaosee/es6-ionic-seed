import TestService from "./service/test.service";

export default angular
  .module('app.global', [])
  .service('TestService', TestService)
  .name;
