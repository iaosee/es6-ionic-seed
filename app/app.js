import './vendor/ionic/js/ionic.bundle.js';
import './vendor/ionic/css/ionic.css';

import 'swiper';
import 'oclazyload';

import './manifest.json';
import './style/app.scss';

import App from "./modules/app.module";

angular.element(document)
  .ready(function () {
    angular.bootstrap(
      document,
      [App],
      { strictDi: true }
    );
  });

