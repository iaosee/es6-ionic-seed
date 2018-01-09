
import homeRouterConfig from "./home-router.config";
import HomeController   from "./home.controller";

import "./home.html";
import "./home.scss";

export default angular
  .module('app.home', [])
  .controller('HomeController', HomeController)
  .component('homeBanner', () => new Object())
  .config(homeRouterConfig)
  .name;
