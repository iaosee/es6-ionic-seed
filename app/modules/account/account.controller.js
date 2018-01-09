

export default class AccountController {
  static $inject = ['$scope'];

  settings = {
    enableFriends: true
  };

  constructor($scope) {

    [ this.$scope,
    ] = [...arguments];

  }

  save() {

    console.log(this.settings);
  }

}
