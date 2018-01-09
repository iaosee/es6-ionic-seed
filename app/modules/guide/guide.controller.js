

export default class GuideController {

  static $inject = ['$scope', '$ionicHistory', 'TestService'];

  constructor($scope, $ionicHistory, TestService) {

    [ this.$scope,
      this.$ionicHistory,
      this.TestService,
    ] = [...arguments];

  }

}
