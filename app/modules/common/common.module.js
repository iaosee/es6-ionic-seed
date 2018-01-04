import routerConfig from "./router.config";
import run from "./run";

export default angular
  .module('app.common', [])
  .config(routerConfig)
  .run(run)
  .name;