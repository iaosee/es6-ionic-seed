
import ListController   from "./list.controller";
import listRouterConfig from "./list-router.config";

import './list.html';
import './list.scss';

export default angular
  .module('app.list', [])
  .controller('ListController', ListController)
  .config(listRouterConfig)
  .name;
