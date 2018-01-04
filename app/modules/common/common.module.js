import routerConfig from "./router.config";
import run from "./run";

console.log(routerConfig)
console.log(run)

export default angular
  .module('app.common', [])
  .config(routerConfig)
  .run(run)
  .name;