
import App from "./modules/app.module";


import './manifest.json';
import './style/app.scss';

console.log(App);

angular.element(document)
  .ready(function () {
    angular.bootstrap(
      document,
      [App],
      { strictDi: true }
    );
  });

