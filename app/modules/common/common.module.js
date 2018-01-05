import CommonController from "./common.controller";

import routerConfig from "./router.config";
import run from "./run";

export default angular
  .module('app.common', [])
  .controller('CommonController', CommonController)
  .config(routerConfig)
  .run(run)
  .name;
