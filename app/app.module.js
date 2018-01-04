import commonModule from "./modules/common/common.module";
import globalModule from "./modules/global/global.module";
import homeModule   from "./modules/home/home.module";

import './style/app.scss';

console.log(commonModule);
console.log(globalModule);
console.log(homeModule);

angular.module('app', [
  'ionic',
  commonModule,
  globalModule,
  homeModule,
]);
