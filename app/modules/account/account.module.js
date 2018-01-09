
import AccountController   from "./account.controller";
import accountRouterConfig from "./account-router.config";

import './account.html';
import './account.scss';

export default angular
  .module('app.account', [])
  .controller('AccountController', AccountController)
  .config(accountRouterConfig)
  .name;
