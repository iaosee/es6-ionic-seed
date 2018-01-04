


run.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function run($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      template: require('../../templates/menu.html'),
      // controller: 'AppCtrl'
    });

  $urlRouterProvider.otherwise('/app/home');
}
