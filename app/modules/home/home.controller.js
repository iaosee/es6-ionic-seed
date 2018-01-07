
export default class HomeController {

  static $inject = ['$scope', '$http', '$ionicHistory', '$ocLazyLoad', 'TestService'];

  controller = 'HomeController';
  name = 'XiaoFeng';

  constructor($scope, $http, TestService) {
    // console.log('Hello, I am HomeController');

    [ this.$scope,
      this.$http,
      this.$ionicHistory,
      this.$ocLazyLoad,
      this.TestService,
    ] = [...arguments];

    console.log(this.controller);

    // this.$scope.$on('ocLazyLoad.moduleLoaded', event => {
    //   console.log(event);
    // });

  }

  sayHello() {
    console.log('will call *TestService.sayHi()*');
    this.TestService.sayHi();

    this.hi();
  }

  hi() {
    console.log('hi');
  }
}
