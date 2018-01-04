

export default class HomeController {

  static $inject = ['$scope', '$http', 'TestService'];

  constructor($scope, $http, TestService) {
    console.log('Hello, I am HomeController');

    console.log($scope);
    console.log($http);
    console.log(TestService);

    console.log(TestService.sayHi());


    this.controller = 'HomeController';
    this.name = 'XiaoFeng';
  }

  sayHello() {
    console.log('Hello');
    TestService.sayHi();
  }
}
