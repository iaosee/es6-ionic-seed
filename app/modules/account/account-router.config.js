

listRouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function listRouterConfig($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app.account', {
      url: '/account',
      views: {
        'account': {
          template: require('./account.html'),
          controller: 'AccountController',
          controllerAs: 'vm',
        }
      }
    });
}
