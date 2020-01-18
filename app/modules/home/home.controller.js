
export default class HomeController {

  static $inject = ['$scope', '$http', '$ionicHistory', '$ocLazyLoad', 'TestService', 'ToolsService'];

  controller = 'HomeController';
  name = 'XiaoFeng';
  dataList = [];

  constructor($scope, $http, $ionicHistory, $ocLazyLoad, TestService, ToolsService) {

    console.log('Hello, I am HomeController');

    [ this.$scope,
      this.$http,
      this.$ionicHistory,
      this.$ocLazyLoad,
      this.TestService,
      this.ToolsService,
    ] = [...arguments];

    // this.$scope.$on('ocLazyLoad.moduleLoaded', event => {
    //   console.log(event);
    // });

  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  $onInit() {
    console.log('HomeController onInit');
  }

  $doCheck() {
    console.log('HomeController doCheck');
  }

  $onDestroy() {
    console.log('HomeController onDestroy');
  }

  $postLink() {
    console.log('HomeController postLink');
  }


  async getDataList() {

    const response = await $http.get('https://www.v2ex.com/api/topics/hot.json', {
      name: 'xiaofneg',
      age: 20,
      date: new Date().getTime()
    });

    this.dataList = response.data;
    console.log(this.dataList);

    let retFn = this.ToolsService
      .functionBeforeHook(this.sayHello.bind(this), () => {
        console.log('before');
      });

    retFn = this.ToolsService
      .functionAfterHook(retFn, () => {
        console.log('after');
        return 'a';
      });

    retFn();
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
