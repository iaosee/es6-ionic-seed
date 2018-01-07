import commonModule from "./modules/common/common.module";
import globalModule from "./modules/global/global.module";
import homeModule   from "./modules/home/home.module";

import "./manifest.json";
import "./style/app.scss";

console.log(commonModule);
console.log(globalModule);
console.log(homeModule);

angular.module('app', [
  'ionic', 
  'oc.lazyLoad',
  commonModule,
  globalModule,
  homeModule,
]);

