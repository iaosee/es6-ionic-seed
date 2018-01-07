import TestService from "./service/test.service";
import IndexDbService from "./service/indexdb.service";

export default angular
  .module('app.global', [])
  .service('TestService', TestService)
  .service('IndexDbService', IndexDbService)
  .name;
