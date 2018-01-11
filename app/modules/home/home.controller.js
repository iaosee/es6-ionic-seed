
export default class HomeController {

  static $inject = ['$scope', '$http', '$ionicHistory', '$ocLazyLoad', 'TestService'];

  controller = 'HomeController';
  name = 'XiaoFeng';
  dataList = [];

  constructor($scope, $http, $ionicHistory, $ocLazyLoad, TestService) {

    console.log('Hello, I am HomeController');

    [ this.$scope,
      this.$http,
      this.$ionicHistory,
      this.$ocLazyLoad,
      this.TestService,
    ] = [...arguments];

    // this.$scope.$on('ocLazyLoad.moduleLoaded', event => {
    //   console.log(event);
    // });

    $http.get('https://www.v2ex.com/api/topics/hot.json', {
      name: 'xiaofneg',
      age: 20,
      date: new Date().getTime()
    })
      .then((response) => {
        this.dataList = response.data;
        console.log(this.dataList);
      })
      .catch((response) => {
        console.log(response);
      });
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
