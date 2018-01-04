
import HomeController from "./home.controller";
import homeRouterConfig from "./home-router.config";

export default angular
	.module('app.home', [])
  .controller('HomeController', HomeController)
  .config(homeRouterConfig)
  .name;
