
import homeRouterConfig from "./home-router.config";
import HomeController   from "./home.controller";

import "./home.html";
import "./home.scss";

let homeBanner = () => {

}

export default angular
  .module('app.home', [])
  .component('homeBanner', homeBanner)
  .controller('HomeController', HomeController)
  .config(homeRouterConfig)
  .name;
