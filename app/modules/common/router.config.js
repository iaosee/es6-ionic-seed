


run.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function run($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      template: require('../../templates/menu.html'),
      // controller: 'AppCtrl'
    });

  $urlRouterProvider.otherwise('/app/home');
}