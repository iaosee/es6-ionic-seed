
export default class CommonController {
  static $inject = ['$scope', '$timeout', '$ionicModal'];

  controller = 'CommonController';
  loginData = {};

  constructor($scope, $timeout, $ionicModal) {

    [ this.$scope,
      this.$timeout,
      this.$ionicModal,
    ] = [...arguments];

    this._initModal();

  }

  _initModal() {

    let scope = this.$scope.$new();
    scope.doLogin = this.doLogin.bind(this);
    scope.loginData = this.loginData;

    this.$scope.modal = this.$ionicModal
                          .fromTemplate(require('./templates/login.html'), {
                            scope: scope,
                          });


  }

  login() {
    this.$scope.modal.show();
  }

  closeLogin() {
    this.$scope.modal.hide();
  }

  doLogin() {

    console.log('Doing login', this.loginData);
    // do something
    this.$timeout(() => {
      this.closeLogin();
    }, 1000);
  }

}
