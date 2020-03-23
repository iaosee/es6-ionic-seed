
import homeRouterConfig from './home-router.config';
import HomeController   from './home.controller';
import HomeBanner       from './components/home-banner.component';

import './home.scss';

export default angular
  .module('app.home', [])
  .controller('HomeController', HomeController)
  .directive('homeBanner', () => new HomeBanner())
  .config(homeRouterConfig)
  .name;
