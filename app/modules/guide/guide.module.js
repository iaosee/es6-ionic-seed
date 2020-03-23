
import GuideController    from "./guide.controller";
import guideRouterConfig  from "./guide-router.config";

import './guide.scss';

export default angular
  .module('app.guide', [])
  .controller('GuideController', GuideController)
  .config(guideRouterConfig)
  .name;
