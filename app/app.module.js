import commonModule from "./modules/common/common.module";


// import './vendor/ionic/css/ionic.css';
// import './vendor/swiper/css/swiper.css';
import './style/app.scss';

console.log(commonModule);

angular.module('app', [
    'ionic',
    commonModule,

]);

