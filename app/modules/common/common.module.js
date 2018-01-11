import CommonController from "./common.controller";
import routerConfig     from "./router.config";
import httpConfig       from './http.config';
import ionicConfig      from './ionic.config';
import run              from "./run";



export default angular
  .module('app.common', [])
  .controller('CommonController', CommonController)
  .config(routerConfig)
  .config(ionicConfig)
  .config(httpConfig)
  .run(run)
  .name;
