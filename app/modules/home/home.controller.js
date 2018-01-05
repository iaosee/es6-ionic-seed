

export default class HomeController {

  static $inject = ['$scope', '$http', '$ionicHistory', '$ocLazyLoad', 'TestService'];

  constructor($scope, $http, TestService) {
    // console.log('Hello, I am HomeController');
    
    [ this.$scope, 
      this.$http, 
      this.$ionicHistory, 
      this.$ocLazyLoad, 
      this.TestService,
    ] = [...arguments];

    this.controller = 'HomeController';
    this.name = 'XiaoFeng';
    
    this.$scope.$on('ocLazyLoad.moduleLoaded', event => {
      console.log(event);
    });
  }

  sayHello() {
    console.log('Hello');
    this.TestService.sayHi();
  }
}
